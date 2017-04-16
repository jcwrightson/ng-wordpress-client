import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html',
  providers: [WordPress]
  
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
        const log = console.log
        let url: string

        wp.fetchWp('./app/app.cfg.json').subscribe(cfg => {
            this.cfg = cfg
            console.log(this.cfg)
            url = wp.QuerySettings(cfg.settings, 'wp-url') + wp.QuerySettings(cfg.settings, 'api-root-path') + wp.QuerySettings(cfg.settings, 'api-url')
               
            if (this.postType){
                wp.fetchWp(url + '/' + this.postType).subscribe(
                posts => {
                    this.posts = posts
                    log(posts)
                    }   
                )
            } else {
                wp.fetchWp(url + '/posts').subscribe(
                posts => {
                    this.posts = posts
                    log(posts)
                    }
                )
            }
        })  
    }

    QueryPostSettings(q: string){
        return this.wp.QuerySettings(this.cfg.postSettings, q)
    }
 };





