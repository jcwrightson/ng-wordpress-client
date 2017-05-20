import { Component, Input, Pipe, PipeTransform, ApplicationRef } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { WordPress }  from '../wordpress.service'


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

            this.getSingle(params).then(
                post => {
                    this.post = post
                    this.hasPost = true
                    console.log(this.post)
                }
            )
        )

    }

    ngOnInit(){
        const wp = this.wp

    }

    getSingle(params: any){
      let self = this
      let query: string
      console.log(params)

      query = '/posts?slug=' + params.slug

      if (params.cpt){
          query = '/' + params.cpt + '?slug=' + params.slug
      }


      let promise = new Promise((resolve, reject) => {
              self.wp.buildUrl().then(url =>
                  self.wp.fetchWp(url, query).subscribe(
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





