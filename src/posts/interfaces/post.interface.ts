import { Document } from 'mongoose';

export interface Post extends Document {
    readonly title: string;
    readonly post_content: string;
    readonly author: string;
    readonly published: boolean;
    readonly created_at: Date;
}
