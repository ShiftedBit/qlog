import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ILoggingService} from "./settings.interface";
import 'rxjs/Rx';

@Injectable()
export class SettingsProvider {

  constructor(public http: Http) {

  }

  getLoggingServices(): Observable<ILoggingService[]> {
    return this.http.get('assets/data/logging.services.json')
      .map(res => res.json());
  }
}
