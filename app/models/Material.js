import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const materialUserSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    assignedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    note: String,
  },
  { timestamps: true }
);

const materialSchema = new Schema(
  {
    name: String,
    description: String,
    sku: String,
    category: String,
    status: {
      type: String,
      enum: ['used', 'broken', 'standBy'],
      default: 'standBy',
    },
    registeredBy: { type: Schema.Types.ObjectId, ref: 'User' },
    users: [materialUserSchema],
  },
  { timestamps: true }
);

const Material = mongoose.model('Material', materialSchema);
export default Material;
