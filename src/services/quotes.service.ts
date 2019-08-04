import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
    constructor(private http: HttpService) {}

    getQuotes() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                map(res => res.data)
            );
    }

    getQuote(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts' + id)
            .pipe(
                map(res => res.data)
            );
    }

}
