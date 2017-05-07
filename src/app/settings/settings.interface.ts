export interface ILoggingService {
  name?: string;
  apiUrl?: string;
  username?: string;
  password?: string;

  fromJson(json);
}

export interface ISettings {
  loggingServices: ILoggingService[];
}
