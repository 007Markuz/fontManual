import { Component, OnInit } from '@angular/core';
import {SessionStoreService} from '../../core/store/session-store.service';
declare var device;

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {


   urlService: string;
   firtsId: string;

  constructor(public sessionStore: SessionStoreService) {
    this.urlService= sessionStore.urlService;
    this.firtsId= sessionStore.firtsId;
  }
  deviceInfo: any;
  ngOnInit() {
    /*this.deviceInfo = {
      model: device.model,
      platform: device.platform,
      uuid: device.uuid,
      version: device.version,
      manufacturer: device.manufacturer,
      serial: device.serial
  }*/
  }
  save(){
    this.sessionStore.setServiceInfo(this.urlService, this.firtsId);
    this.sessionStore.urlService = this.urlService;
    this.sessionStore.firtsId =this.firtsId;
  }

}
