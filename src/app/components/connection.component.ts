import { Component, Output, EventEmitter } from '@angular/core';
import { WordPress }  from '../wordpress.service';

@Component({
  selector: 'wp-connection',
  template: ``,
  providers: [WordPress]
  
})
export class WpConnectionComponent  {
  
  @Output()
  site: any = new EventEmitter

  constructor(public wp: WordPress){
    
  }

  ngOnInit(){

    const wp = this.wp
    const log = console.log
    let url, apiRoot: string

    wp.fetchWp('./app/app.cfg.json').subscribe((cfg) => {
      let self = this
        wp._cfg = cfg
        url = wp.QuerySettings(wp._cfg.settings, 'wp-url')
        apiRoot = wp.QuerySettings(wp._cfg.settings, 'api-root-path')
        if (url && apiRoot){
          wp.fetchWp(url + apiRoot).subscribe(
            site => {
              self.site.emit(site) 
            }
          )
        } else log('Config Error in app.cfg.json: ', url, apiRoot)
     
    })
  }
 }
