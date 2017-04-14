import { Component } from '@angular/core';
import { WordPress }  from '../app/wordpress.service';

@Component({
  selector: 'my-app',
  template: `<h1>ngWordPressClient</h1>`,
  providers: [WordPress]
  
})
export class AppComponent  {

  constructor(private wp: WordPress){
    
  }

  ngOnInit(){

    const wp = this.wp
    const log = console.log
    let url, api: string

    wp.fetchWp('./app/app.cfg.json').subscribe((cfg) => {
        wp._cfg = cfg
        url = wp.QuerySettings(wp._cfg.settings, 'wp-url')
        api = wp.QuerySettings(wp._cfg.settings, 'api-url')
        if (url && api){
          wp.fetchWp(url + api).subscribe((site) => {
            log(site)
          })
        } else log('Config Error in app.cfg.json: ', url, api)
     
    })
  }
 }
