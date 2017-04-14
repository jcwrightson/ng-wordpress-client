import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WordPress }  from './wordpress.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule 
  ],

  declarations: [ 
    AppComponent
  ],

  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
