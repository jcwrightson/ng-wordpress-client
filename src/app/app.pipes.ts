import { Pipe, PipeTransform } from '@angular/core';
import { WordPress } from './wordpress.service'

@Pipe({name: 'stripUrl'})
export class StripUrlPipe implements PipeTransform {
  private wpUrl: string

  constructor(private wp: WordPress){
    wp.initCfg().subscribe(
      cfg => this.wpUrl = wp.QuerySettings(cfg.globalSettings, 'wp-url')
    )

  }

  transform(link: string): string {

    // Remove http:
    if (link.includes("http:")){
      link = link.replace("http:", '')
    }

    // Remove https:
    if (link.includes("https:")){
      link = link.replace("https:", '')
    }

    // Remove url to WP site
    return  link.replace(this.wpUrl, '')
  }
}
