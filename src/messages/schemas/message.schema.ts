import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    title: String,
    body: String,
    submittedBy: String
})
