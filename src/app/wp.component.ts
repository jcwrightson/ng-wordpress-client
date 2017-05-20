import { Component} from '@angular/core';
import { WordPress }  from './wordpress.service';

@Component({
  selector: 'wordpress',
  template: `<wp-posts></wp-posts>`
})
export class WpComponent  {

  constructor(private wp: WordPress) {}
}
