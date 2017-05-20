import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class WordPress{

  private pathToCfg: string = '../app/app.cfg.json'
  public _cfg: any = undefined
  public results: any
  
  
  constructor(private http: Http) { 
      this.http.get(this.pathToCfg).map(res => res.json()).subscribe(cfg => {
        if (!this.QuerySettings(cfg.globalSettings, 'enable-debugging')){

          //Disable console outputs
          console.log = function(){}
        }
      })
  }

  initCfg(){
    return this.http.get(this.pathToCfg).map(res => res.json())
  }

  setCache(cName: string, cVal : string, cExp : any){

  }

  buildUrl(): Promise<any>{
      let url: string
      let self = this

      var promise = new Promise((resolve , reject) => {    
        self.initCfg().subscribe((cfg) => {
          self._cfg = cfg    
          url = self.QuerySettings(cfg.globalSettings, 'wp-url') + self.QuerySettings(cfg.globalSettings, 'api-root-path') + self.QuerySettings(cfg.globalSettings, 'api-url')
           if (!url.includes('false')){
             resolve(url);  
           }else {
             reject(Error("Invalid URL! check app.cfg.json"));  
           }
        })  
      })
      return promise;
    }

  QuerySettings(settingsArr: any[], q: string){
    let setting = settingsArr.filter((item)=>
      item.hasOwnProperty(q)
    )

    if (setting.length > 0){
      return setting[0][q]} 
    else return false
  }

  fetchWp(url: string, query: string) {
    return this.http.get(url + query)
      .map (res => res.json())
      .catch(this.handleError)
      
  }


  routeListToArray(list:string[]){
          var arr = [];
          for (var key in list) {
            if (list.hasOwnProperty(key)) {
              arr.push({"path" : key, "data" : list[key]});
            }
          }

          return arr;
  }

  
    isQueriableRoute(index: number){
      if (this.results.routesArray[index].path.includes('?')){
          return true;
      }
    }

    isResponseArray(){
      return this.results.response.isArray();
    }

    isRestRoute(url: string, route: string){
      this.fetchWp(url, route).subscribe(res => {
        if (res.data.status != '404'){
          return true
        }
      });
    }

  
    getCatName(id: number){
        let url = this.buildUrl()
    }


    readCache(cName: string){
      let cache : string[]
      let cItem : any
      cache = document.cookie.split(';')

      cItem = cache.filter((item) =>{
        return item.includes(cName)
      })[0]

      cItem.replace(cName + '=', '')

      if (cItem.includes('{' || '[')){
        JSON.parse(cItem)
      }

      console.log(cItem)

      

    }

  private handleError(error: any): Promise<any> {
    let errMsg: string;
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //alert("ERROR: " + errMsg);
    return Promise.reject(errMsg || error);
  }

}

