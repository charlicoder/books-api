import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactSchema } from './schemas/contacts.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema}])
    ],
    providers: [ContactsService],
    controllers: [ContactsController]
})
export class ContactsModule {}
