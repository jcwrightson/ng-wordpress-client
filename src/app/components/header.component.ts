import { Component, Input, OnChanges } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-header',
  templateUrl: './header.component.html'
 
  
})

export class WpHeaderComponent  {

    private site: any

    constructor(private wp: WordPress){
        this.site = {}
    }

    ngOnInit(){
        const wp = this.wp

        wp.initCfg().subscribe(
            cfg => {
                let url = wp.QuerySettings(cfg.globalSettings, 'wp-url') + wp.QuerySettings(cfg.globalSettings, 'api-root-path')

                wp.fetchWp(url).subscribe(
                    site => {
                        this.formatHeader(site)
                    }
                )
            }
        )
        
    }

    formatHeader(site: any){
        this.site = site
        console.log(site)
    }
 };

