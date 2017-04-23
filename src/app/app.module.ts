import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { WpHeaderComponent }  from './components/header.component';
import { WpPostsComponent }  from './components/posts.component';
import { WpSingleComponent }  from './components/single.component';
import { WpComponent }  from './wp.component';
import { PostLinkPipe }  from './app.pipes';
import { WpConnectionComponent }  from './components/connection.component';
import { WordPress }  from './wordpress.service';

const appRoutes : Routes = [
  { path: '', component: WpComponent },
  { path: ':slug', component: WpSingleComponent }
]

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) 
  ],

  declarations: [ 
    AppComponent,
    WpComponent,
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
