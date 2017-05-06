import {Injectable} from "@angular/core";
import {Settings} from "./settings";
import {LoggingService} from "./settings";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class SettingsProvider {

  private settings: Settings;

  constructor() {

    var clublog = new LoggingService(
      'Clublog', 'http://www.clublog.org', 'OE1MAX', 'Mko0Nji9'
    );

    var loggingServices: LoggingService[] = [];
    loggingServices.push(clublog);

    this.settings = new Settings(loggingServices);
  }

  getLoggingServices() {
    return Observable.
  }
}
