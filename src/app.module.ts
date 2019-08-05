import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { PostsModule } from './posts/posts.module';
import { MessagesModule } from './messages/messages.module';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/booksapi'),
        HttpModule,
        ContactsModule,
        PostsModule,
        MessagesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
