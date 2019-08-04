import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MessagesService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const message = await new this.messageModel(createMessageDto);
        return await message.save();
    }

    async getMessages(): Promise<Message[]> {
        const messages = await this.messageModel.find().exec();
        return messages;
    }
}
