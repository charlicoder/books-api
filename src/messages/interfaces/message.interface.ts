import { Document } from 'mongoose';

export interface Message extends Document {
    readonly title: string;
    readonly body: string;
    readonly submittedBy: string;
}
