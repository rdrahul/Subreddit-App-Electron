import { Component , NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import {shell} from 'electron';

@Component(
    {
        selector:'app',
        templateUrl : 'templates/app.component.html'
    }
)

export class AppComponent
{
    subr : string ;
    entries : Array<Object>;
    showcards : boolean = false;
    resultloader:boolean =false;

    constructor( private http:Http , private zone:NgZone )
    {
        this.subr = "angular";
        this.GetReddit();
    }

    GetReddit()
    {
        this.resultloader= true;
        this.http.get('https://reddit.com/r/' + this.subr + '.json')
        .map(res => res.json())
        .map(json=> json.data.children)
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
        )
        .subscribe( data =>
            {
                this.entries = data;
                this.zone.run(() =>
                {
                    
                    this.showcards = true;
                    this.resultloader = false ; 
                });
                console.log(data);
            }
            
        );
    }

    OpenLink( url )
    {
        shell.openExternal( url );
    }
}