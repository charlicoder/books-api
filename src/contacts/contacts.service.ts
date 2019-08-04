import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';


@Injectable()
export class ContactsService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) {}

    async create(createConDto: CreateContactDto): Promise<Contact> {
        const createContact = new this.contactModel(createConDto);
        return await createContact.save();
    }

    async findAll(): Promise<Contact[]> {
        return await this.contactModel.find().exec();
    }
}
