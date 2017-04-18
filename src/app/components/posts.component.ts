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

    @Input('postCat')
    private postCat: string

    constructor(private wp: WordPress){
        this.posts = []
    }

    ngOnInit(){
        const wp = this.wp

        wp.buildUrl().then(
            url => this.getPosts(url)
        ).catch(
            Error => console.error(Error)
        )
    }

    getPosts(url: any){
        const wp = this.wp

        if (this.postType){
            if (this.postCat){
                //Fetch by type and cat
                wp.fetchWp(url + '/' + this.postType).subscribe(
                posts => this.formatPosts(posts))
            }else {
                //fetch by post type
                wp.fetchWp(url + '/' + this.postType).subscribe(
                posts => this.formatPosts(posts))
            }                
        }else {
            if (this.postCat){
                //Fetch by post cat
                wp.fetchWp(url + '/posts').subscribe(
                posts => this.formatPosts(posts))
            }else {
                //Fetch posts (default)
                wp.fetchWp(url + '/posts').subscribe(
                posts => this.formatPosts(posts))
            }
        }
    }

    formatPosts(posts: any[]){
        this.posts = posts
        console.log(posts)
    }

    QueryPostSettings(q: string){
        return this.wp.QuerySettings(this.wp._cfg.postSettings, q)
    }
 };





