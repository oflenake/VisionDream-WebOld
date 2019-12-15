// so the typescript compiler doesn't complain about the global config object
declare var configApp: any;
declare var process: NodeJS.Process;

interface Process {
  env: Env
}

interface Env {
  VD_DOMAIN_NAME_LOCAL: string
  VD_DOMAIN_NAME_EXTERNAL: string
  GH_TOKEN: string
  HOST_SECRETE_LOCAL: string
  VD_HOST_SECRETE_EXTERNAL: string
  VDAPP_UI_NAME: string
  VDAPP_DEV_UI_URL_LOCAL: string
  VDAPP_DEV_UI_URL_EXTERNAL: string
  VDAPP_PRD_UI_URL_LOCAL: string
  VDAPP_PRD_UI_URL_EXTERNAL: string
  VDAPP_DEV_API_URL_LOCAL: string
  VDAPP_DEV_API_URL_EXTERNAL: string
  VDAPP_PRD_API_URL_LOCAL: string
  VDAPP_PRD_API_URL_EXTERNAL: string
  VDAPP_SENTINEL_NLOG_LOGS: string
  VDAPP_SENTINEL_NLOG_PROVIDER: string
  VDAPP_SENTINEL_NLOG_PROTOCOL: string
  VDAPP_SENTINEL_NLOG_PORT: string
}

interface GlobalEnvironment {
  process: Process;
}
