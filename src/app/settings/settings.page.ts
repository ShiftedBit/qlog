import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {SettingsProvider} from "./settings.provider";
import {LoggingService} from "./settings";
import {ILoggingService} from "./settings.interface";
import {ListPage} from "../../pages/list/list";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',

})
export class SettingsPage {

  loggingServices: LoggingService[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public settingsProvider: SettingsProvider) {
  }

  ngOnInit() {
    this.loggingServices = [];

    this.settingsProvider.getLoggingServices().subscribe(
      (services: ILoggingService[]) => {
        services.forEach((loggingService: ILoggingService) => {
          var service = new LoggingService();
          service.fromJson(loggingService);
          this.loggingServices.push(service);
        })
      },
      (err) => {
        console.log(err, 'error');
      },
      () => {
        console.log('completed');
      }
    )
  }

  itemTapped($event: UIEvent, loggingService: LoggingService) {
  
  }

}
