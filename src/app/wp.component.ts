import { Component, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { WordPress }  from '../app/wordpress.service';

@Component({
  selector: 'wordpress',
  template: `
  <wp-posts [postType]="'projects'" [postCat]="'test'" [taxTerm]="'portfolios'" [taxQuery]="'9'"></wp-posts>`
  
})
export class WpComponent  {
  public site:any

  constructor(private wp: WordPress){}
    
}
