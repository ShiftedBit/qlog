import {ISettings} from "./settings.interface";
import {ILoggingService} from "./settings.interface";

export class LoggingService implements ILoggingService {

  public name: string;
  public apiUrl: string;
  public username: string;
  public password: string;

  constructor(name?: string,
              apiUrl?: string,
              username?: string,
              password?: string) {}

  fromJson(json: ILoggingService) {
    this.name = json.name;
    this.apiUrl = json.apiUrl;
    this.username = json.username;
    this.password = json.password;
  }

}

export class Settings implements ISettings {

  constructor(public loggingServices: LoggingService[]) {

  }

}
