import {ISettings} from "./settings.interface";
import {ILoggingService} from "./settings.interface";

export class LoggingService implements ILoggingService {

  constructor(public name: string,
              public apiUrl: string,
              public username: string,
              public password: string) {}
}

export class Settings implements ISettings {

  constructor(public loggingServices: LoggingService[]) {

  }

}
