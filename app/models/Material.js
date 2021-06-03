import mongoose from "mongoose";
var Schema = mongoose.Schema;

var materialSchema = new Schema({
    name: String,
    description: String,
    sku: String,
    category: String,
    status: {
        type: String,
        enum: ['used', 'broken', 'standBy'],
        default: 'standBy'
    },
    registredBy: { type: Schema.Types.ObjectId, ref: 'User' },
    

} ,{ timestamps: true });

const Material = mongoose.model("Material", materialSchema);
export default Material;