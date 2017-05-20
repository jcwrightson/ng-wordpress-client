import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { WpHeaderComponent }  from './components/header.component';
import { WpPostsComponent }  from './components/posts.component';
import { WpSingleComponent }  from './components/single.component';
import { WpComponent }  from './wp.component';
import { StripUrlPipe }  from './app.pipes';
import { WordPress }  from './wordpress.service';


const appRoutes : Routes = [
  { path: '', component: WpComponent },
  { path: ':year/:month/:slug', component: WpSingleComponent },
  { path: ':cpt', component: WpComponent },
  { path: ':cpt/:slug', component: WpSingleComponent }
]

@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)],

  declarations: [
    AppComponent,
    WpComponent,
    WpHeaderComponent,
    WpPostsComponent,
    WpSingleComponent,
    StripUrlPipe

  ],

  providers: [
      WordPress
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule {}
