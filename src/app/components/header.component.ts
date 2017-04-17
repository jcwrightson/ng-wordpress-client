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
        const log = console.log
        let url: string
        
        // Read CFG
        wp.initCfg().subscribe(cfg => {

            //Build REST route
            url = wp.QuerySettings(cfg.settings, 'wp-url') + wp.QuerySettings(cfg.settings, 'api-root-path')

            //Fetch Result
            wp.fetchWp(url).subscribe(
                site => {
                    this.formatHeader(site)
                    }
                )
        })
    }

    formatHeader(site: any){
        this.site = site
    }
 };

