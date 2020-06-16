/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose'

const budgetSchema = new mongoose.Schema(
  {
    overallSpend: {
      type: Number,
      required: true,
    },
    createBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    category: {
      type: mongoose.SchemaType.ObjectId,
      ref: 'category',
    },
  },
  { timestamps: true }
)

export const Budget = mongoose.model('budget', budgetSchema)
