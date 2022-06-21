import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Product',
  new Schema({
    nameId: {
      type: String
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    polutions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Polution'
      }
    ],
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resource'
      }
    ]
  })
);
