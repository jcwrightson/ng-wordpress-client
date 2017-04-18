import { Pipe, PipeTransform } from '@angular/core';
import { WordPress } from './wordpress.service'

@Pipe({name: 'postLink'})
export class PostLinkPipe implements PipeTransform {
  private wpUrl: string

  constructor(private wp: WordPress){
    wp.initCfg().subscribe(
      cfg => this.wpUrl = wp.QuerySettings(cfg.globalSettings, 'wp-url')
    )

  }
  
  transform(link: string): string {
    return  link.replace(this.wpUrl, '') 
  }
}