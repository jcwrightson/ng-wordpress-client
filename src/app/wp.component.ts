import { Component} from '@angular/core'
import { WordPress }  from './wordpress.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'wordpress',
  // template: `<wp-posts [postType]="'projects'"></wp-posts>`
  template: `<wp-posts [postType]="cpt"></wp-posts>`
})
export class WpComponent  {

  private cpt: string;

  constructor(private wp: WordPress,  private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      {
        console.log(params)
        if (params.cpt){
          this.cpt = params.cpt;
        }

      }

    )
  }
}
