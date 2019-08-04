import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: String,
    post_content: String,
    author: String,
    published: Boolean,
    created_at: {  type: Date, default: Date.now}
})
