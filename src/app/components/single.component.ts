import { Component, Input, Pipe, PipeTransform, ApplicationRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WordPress }  from '../wordpress.service';


@Component({
  selector: 'wp-single',
  templateUrl: './single.component.html'
 
  
})

export class WpSingleComponent  {

    private post: any
    private cfg: any
    private hasPost: boolean = false

    constructor(private wp: WordPress, private router: Router, private route: ActivatedRoute, private appRef: ApplicationRef){
        this.post = {}

        this.route.params.subscribe(params =>
            this.getSingle(params.slug).then(
                post => {
                    this.post = post
                    this.hasPost = true
                    // this.appRef.tick()
                }
            )
        )

    }

    ngOnInit(){
        const wp = this.wp

        

        //console.log(slug)

        // wp.buildUrl().then(
        //     url => this.getSingle(url, slug)
        // ).catch(
        //     Error => console.error(Error)
        // )
    }

    getSingle(slug: string){
    let self = this

    let promise = new Promise((resolve, reject) => {
            self.wp.buildUrl().then(url =>
                self.wp.fetchWp(url + '/posts?slug=' + slug).subscribe(
                    post => {
                        resolve(post[0])
                    },
                    error => {
                        reject(error)
                    }
                )
            )
    })

    return promise
    }

    formatPosts(posts: any[]){
       
    }
 };





