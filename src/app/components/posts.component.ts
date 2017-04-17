import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
 
  
})

export class WpPostsComponent  {

    private posts: any[]
    private cfg: any

    @Input('postType')
    private postType: string

    constructor(private wp: WordPress){
        this.posts = []
    }

    ngOnInit(){
        const wp = this.wp
        
        let url: string

        wp.initCfg().subscribe(cfg => {

            this.cfg = cfg
           
            url = wp.QuerySettings(cfg.settings, 'wp-url') + wp.QuerySettings(cfg.settings, 'api-root-path') + wp.QuerySettings(cfg.settings, 'api-url')
               
            if (this.postType){
                wp.fetchWp(url + '/' + this.postType).subscribe(
                posts => this.formatPosts(posts)
                )
            } else {
                wp.fetchWp(url + '/posts').subscribe(
                posts => this.formatPosts(posts)
                
                )
            }
        })  
    }

    formatPosts(posts: any[]){
        this.posts = posts
        console.log(posts)
    }

    QueryPostSettings(q: string){
        return this.wp.QuerySettings(this.cfg.postSettings, q)
    }
 };





