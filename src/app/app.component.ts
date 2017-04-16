import { Component, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { WordPress }  from '../app/wordpress.service';

@Component({
  selector: 'my-app',
  template: `
  <wp-header></wp-header>
  <wp-posts></wp-posts>
  <wp-posts [postType]="'satellite'"></wp-posts>
  `,
  providers: [WordPress]
  
})
export class AppComponent  {
  public site:any

  constructor(private wp: WordPress){}
  
  onSite(event: any){
    console.log(event)
    
    this.site = event
    
  }
}
