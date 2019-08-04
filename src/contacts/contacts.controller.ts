import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
import { Contact } from './interfaces/contact.interface';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    async create(@Body() createContactDto: CreateContactDto) {
        return this.contactsService.create(createContactDto);
    }

    @Get()
    async findAll(): Promise<Contact[]> {
        return this.contactsService.findAll()
    }
}
