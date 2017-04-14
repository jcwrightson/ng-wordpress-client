import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WordPress{

  public apiRootPath: string = '/wp-json'
  public _cfg: any
  public results: any = {}
  
  constructor(private http: Http) { 
    
  }

  QuerySettings(settingsArr: any[], q: string){
    let setting = settingsArr.filter((item)=>
      item.hasOwnProperty(q)
    )

    if (setting.length > 0){
      return setting[0][q]} 
    else return false
  }

  fetchWp(url: string) {
    return this.http.get(url)
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
      this.fetchWp(url + this.apiRootPath + route).subscribe(res => {
        if (res.data.status != '404'){
          return true
        }
      });
    }
  


  private handleError(error: any): Promise<any> {
    let errMsg: string;
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    alert("ERROR: " + errMsg);
    return Promise.reject(errMsg || error);
  }

}

