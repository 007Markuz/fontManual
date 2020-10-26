import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {
   urlService: string;
   firtsId: string;
  constructor() {
    if ( window.localStorage.getItem('urlService')) {
      this.setServiceInfo(window.localStorage.getItem('urlService'), window.localStorage.getItem('firtsId'));
    } else {
      this.setServiceInfo('http://192.168.1.202:1880/page?id=', 'categories');
    }
   }

  setServiceInfo(urlService,firtsId) {
    console.log(window.localStorage.getItem('firtsId'));
    window.localStorage.setItem('urlService', urlService);
    window.localStorage.setItem('firtsId', firtsId);
    this.urlService = urlService;
    this.firtsId = firtsId;
    console.log(window.localStorage.getItem('firtsId'));

  }


}
