
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Qso} from "../models/qso.model";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ClublogService {

  private clublogUrl: 'http://www.clublog.org';

  constructor (private http: Http) {

  }

  public syncQsos(): Qso[] {

    var qsos = [
      {
        id: 1,
        callFrom: 'OE1MAX',
        callTo: 'OE3TPB'
      },
      {
        id: 2,
        callFrom: 'OE3TPB',
        callTo: 'OE1MAX'
      }
    ];

    return qsos;

  }

  getQsoLogFromAdif() {

  }


}
