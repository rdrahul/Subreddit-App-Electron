import { Component , NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import {shell} from 'electron';
import {SubReddits} from './../services/subreddit.service';
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

    constructor( private subreddit:SubReddits , private zone:NgZone )
    {
        this.subr = "angular";
        this.GetReddit();
    }

    GetReddit()
    {
        this.resultloader= true;
        this.subreddit.getData( this.subr)
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