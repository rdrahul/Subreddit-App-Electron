import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SubReddits
{
    constructor( private http:Http)
    {

    }
    getData(title:string)
    {
        return this.http.get('https://reddit.com/r/' + title + '.json')
        .map(res => res.json())
        .map(json => json.data.children)
        .map( res => res.map( e =>
                {
                    let temp = 'http://placehold.it/70x70';
                    if (e.data.preview != undefined )
                    {
                        temp = e.data.preview.images[0].source.url;
                    }

                    return {
                        id : e.data.id,
                        title : e.data.title,
                        url : e.data.url,
                        image : temp 
                    }
                }
            )
        );
    }
}