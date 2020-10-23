import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor() { }
  deviceInfo: any;
  ngOnInit() {
    this.deviceInfo = {
      model: device.model,
      platform: device.platform,
      uuid: device.uuid,
      version: device.version,
      manufacturer: device.manufacturer,
      serial: device.serial
  }
  }

}
