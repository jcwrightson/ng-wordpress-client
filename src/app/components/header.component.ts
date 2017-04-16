import { Component, Input, OnChanges } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-header',
  templateUrl: './header.component.html',
  providers: [WordPress]
  
})

export class WpHeaderComponent  {

    private site: any

    constructor(private wp: WordPress){
        this.site = {}
    }

    ngOnInit(){
        const wp = this.wp
        const log = console.log
        let url, apiRoot: string
        let self = this

        wp.fetchWp('./app/app.cfg.json').subscribe(cfg => {
                url = wp.QuerySettings(cfg.settings, 'wp-url')
                apiRoot = wp.QuerySettings(cfg.settings, 'api-root-path')
                if (url && apiRoot){
                wp.fetchWp(url + apiRoot).subscribe(
                    site => {
                        this.site = site
                        console.log(site)
                        }
                    )
                } else log('Config Error in app.cfg.json: ', url, apiRoot)
            
        })

        
    }
 }

