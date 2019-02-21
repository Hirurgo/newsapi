import mongoose, { Schema } from 'mongoose';

const SourceSchema = new Schema({
  id: {
    type: String,
    required: false
  },
  name: String
});

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  source: {
    type: SourceSchema,
    required: false,
    default: {
      id: 'local',
      name: 'Local'
    }
  },
  author: String,
  description: String,
  url: {
    type: String,
    required: true,
    unique: true
  },
  urlToImage: String,
  publishedAt: {
    type: Date,
    validate: {
      validator: d => d <= new Date(),
      message: 'Published date cannot be in the future'
    }
  },
  isEditable: {
    type: Boolean,
    default: true
  },
  isLocalUrlToImage: Boolean,
});

export default mongoose.model('Article', ArticleSchema);
