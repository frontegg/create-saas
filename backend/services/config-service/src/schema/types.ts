import * as graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } = graphql;

const config = {
  name: 'Feature',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    enabled: {
      type: GraphQLBoolean,
    },
    tenantId: {
      type: GraphQLString,
    },
  }),
};

export const FeatureType = new GraphQLObjectType(config);
