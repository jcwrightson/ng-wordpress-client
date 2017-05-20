import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
})

export class WpPostsComponent {

    private posts: any[]

    @Input('postType')
    postType: string

    @Input('postCat')
    postCat: string

    @Input('taxTerm')
    taxTerm: string

    @Input('taxQuery')
    taxQuery: string

    constructor(private wp: WordPress) {
        this.posts = []
    }

    ngOnInit() {
        const wp = this.wp

        wp.buildUrl().then(
            url => this.getPosts(url)
        ).catch(
            Error => console.error(Error)
        )
    }

    getPosts(url: any) {
        const wp = this.wp
        let query: string = '/posts'

        if (this.postType) {
            query = '/' + this.postType + '?'
        }

        if (this.postCat) {
            query += 'categories=' + this.postCat + '&'
        }

        if (this.taxTerm && this.taxQuery) {
            query += this.taxTerm + '=' + this.taxQuery
        }

        console.log('wpQuery: ', query)

        wp.fetchWp(url, query).subscribe(
            posts => this.formatPosts(posts)
        )
    }

    formatPosts(posts: any[]) {
        this.posts = posts
        console.log(posts)
    }

    QueryPostSettings(q: string) {
        return this.wp.QuerySettings(this.wp._cfg.postSettings, q)
    }
 };





