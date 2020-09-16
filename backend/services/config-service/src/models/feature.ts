import { Schema, Document, model } from 'mongoose';

export interface Feature extends Document {
  name: string;
  enabled: boolean;
  tenantId: string;
}

const featureSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
    },
    tenantId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'features',
  },
);

featureSchema.statics = {
  async get(id: string): Promise<Feature | null> {
    try {
      return await this.findById(id);
    } catch (err) {
      return null;
    }
  },
};

export default model<Feature>('Feature', featureSchema);
