import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WpHeaderComponent }  from './components/header.component';
import { WpPostsComponent }  from './components/posts.component';
import { WpSingleComponent }  from './components/single.component';
import { PostLinkPipe }  from './app.pipes';
import { WpConnectionComponent }  from './components/connection.component';
import { WordPress }  from './wordpress.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule 
  ],

  declarations: [ 
    AppComponent,
    WpConnectionComponent,
    WpHeaderComponent,
    WpPostsComponent,
    WpSingleComponent,
    PostLinkPipe
  
  ],

  providers: [
      WordPress
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule {}
