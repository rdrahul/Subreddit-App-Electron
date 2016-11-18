//import { bootstrap } from 'angular2/platform/browser' ;
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { HttpModule  } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SubReddits } from './services/subreddit.service';
//import { MaterializeModule } from 'angular2-materialize';
import {MaterializeDirective} from 'angular2-materialize';

@NgModule({
  imports:      [   BrowserModule, 
                    FormsModule,
                    HttpModule  ],
  declarations: [ AppComponent, MaterializeDirective ],
  bootstrap:    [ AppComponent ],
  providers : [SubReddits]
})
export class AppModule { }


