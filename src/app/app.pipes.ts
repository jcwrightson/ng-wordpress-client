import { Pipe, PipeTransform } from '@angular/core';
import { WordPress } from './wordpress.service'

@Pipe({name: 'postLink'})
export class PostLinkPipe implements PipeTransform {
  private wpUrl: string

  constructor(private wp: WordPress){
      wp.fetchWp('./app/app.cfg.json').subscribe(cfg => { 
            this.wpUrl = wp.QuerySettings(cfg.settings, 'wp-url')
      })  
  }
  
  transform(link: string): string {
    return  link.replace(this.wpUrl, '') 
  }
}