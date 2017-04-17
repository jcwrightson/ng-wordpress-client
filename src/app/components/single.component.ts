import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-single',
  templateUrl: './single.component.html'
 
  
})

export class WpSingleComponent  {

    private post: any
    private cfg: any

    constructor(private wp: WordPress){
        this.post = {}
    }

    ngOnInit(){
        const wp = this.wp
        
        let url: string

        wp.initCfg().subscribe(cfg => {

            this.cfg = cfg
           
            url = wp.QuerySettings(cfg.settings, 'wp-url') + wp.QuerySettings(cfg.settings, 'api-root-path') + wp.QuerySettings(cfg.settings, 'api-url')
               
            
        })  
    }

    formatPosts(posts: any[]){
       
    }
 };





