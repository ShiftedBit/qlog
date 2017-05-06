export interface ILoggingService {
  name: string;
  apiUrl: string;
  username: string;
  password: string;
}

export interface ISettings {
  loggingServices: ILoggingService[];
}
