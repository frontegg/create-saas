import * as graphql from 'graphql';
import { FeatureType } from './types';
import Feature from '../models/feature';

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLSchema } = graphql;

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    feature: {
      type: FeatureType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, { id }, { tenantId }) {
        return Feature.findOne({ tenantId, _id: id });
      },
    },
    features: {
      type: new GraphQLList(FeatureType),
      resolve(parent, {}, { tenantId }) {
        return Feature.find({ tenantId });
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addFeature: {
      type: FeatureType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        enabled: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
      },
      resolve(parent, { name, enabled }, { tenantId }) {
        const feature = new Feature({
          name,
          tenantId,
          enabled,
        });
        return feature.save();
      },
    },
  },
});

export default new GraphQLSchema({
  query,
  mutation,
});
