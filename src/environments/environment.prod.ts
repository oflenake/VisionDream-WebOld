import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  domainLc: process.env.VD_DOMAIN_NAME_LOCAL,
  domainEx: process.env.VD_DOMAIN_NAME_EXTERNAL,
  tokenGh: process.env.GH_TOKEN,
  tokenLc: process.env.HOST_SECRETE_LOCAL,
  tokenEx: process.env.VD_HOST_SECRETE_EXTERNAL,
  appName: process.env.VDAPP_UI_NAME,
  appUrlLc: process.env.VDAPP_PRD_UI_URL_LOCAL,
  appUrlEx: process.env.VDAPP_PRD_UI_URL_EXTERNAL,
  apiUrlLc: process.env.VDAPP_PRD_API_URL_LOCAL,
  apiUrlEx: process.env.VDAPP_PRD_API_URL_EXTERNAL,
  sentNlogLogs: process.env.VDAPP_SENTINEL_NLOG_LOGS,
  sentNlogProvider: process.env.VDAPP_SENTINEL_NLOG_PROVIDER,
  sentNlogProtocol: process.env.VDAPP_SENTINEL_NLOG_PROTOCOL,
  sentNlogPort: process.env.VDAPP_SENTINEL_NLOG_PORT,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR
};

console.log('Production environment is started!');
