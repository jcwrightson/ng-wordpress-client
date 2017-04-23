import { Component, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { WordPress }  from '../app/wordpress.service';

@Component({
  selector: 'wordpress',
  template: `
  <wp-posts></wp-posts>`
  
})
export class WpComponent  {
  public site:any

  constructor(private wp: WordPress){}

}
