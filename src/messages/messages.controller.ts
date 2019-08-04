import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService){

    }

    @Post()
    async createMessage(@Body() message: CreateMessageDto){
        return await this.messagesService.createMessage(message);
    }

    @Get()
    async getMessages(){
        return await this.messagesService.getMessages();
    }

}
