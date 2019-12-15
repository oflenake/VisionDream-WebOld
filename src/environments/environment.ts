// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  domainLc: process.env.VD_DOMAIN_NAME_LOCAL,
  domainEx: process.env.VD_DOMAIN_NAME_EXTERNAL,
  tokenGh: process.env.GH_TOKEN,
  tokenLc: process.env.HOST_SECRETE_LOCAL,
  tokenEx: process.env.VD_HOST_SECRETE_EXTERNAL,
  appName: process.env.VDAPP_UI_NAME,
  appUrlLc: process.env.VDAPP_DEV_UI_URL_LOCAL,
  appUrlEx: process.env.VDAPP_DEV_UI_URL_EXTERNAL,
  apiUrlLc: process.env.VDAPP_DEV_API_URL_LOCAL,
  apiUrlEx: process.env.VDAPP_DEV_API_URL_EXTERNAL,
  sentNlogLogs: process.env.VDAPP_SENTINEL_NLOG_LOGS,
  sentNlogProvider: process.env.VDAPP_SENTINEL_NLOG_PROVIDER,
  sentNlogProtocol: process.env.VDAPP_SENTINEL_NLOG_PROTOCOL,
  sentNlogPort: process.env.VDAPP_SENTINEL_NLOG_PORT,
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.OFF
};

console.log('Development environment is started!');

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
