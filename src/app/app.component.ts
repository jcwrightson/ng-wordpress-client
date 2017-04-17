import { Component, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { WordPress }  from '../app/wordpress.service';

@Component({
  selector: 'my-app',
  template: `
  <wp-header></wp-header>
  <wp-posts></wp-posts>
 
  `
  
})
export class AppComponent  {
  public site:any

  constructor(private wp: WordPress){}

}
