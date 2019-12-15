const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.DefinePlugin({
    'process.env': {
      VD_DOMAIN_NAME_LOCAL: JSON.stringify(process.env.VD_DOMAIN_NAME_LOCAL),
      VD_DOMAIN_NAME_EXTERNAL: JSON.stringify(process.env.VD_DOMAIN_NAME_EXTERNAL),
      GH_TOKEN: JSON.stringify(process.env.GH_TOKEN),
      HOST_SECRETE_LOCAL: JSON.stringify(process.env.HOST_SECRETE_LOCAL),
      VD_HOST_SECRETE_EXTERNAL: JSON.stringify(process.env.VD_HOST_SECRETE_EXTERNAL),
      VDAPP_UI_NAME: JSON.stringify(process.env.VDAPP_UI_NAME),
      VDAPP_DEV_UI_URL_LOCAL: JSON.stringify(process.env.VDAPP_DEV_UI_URL_LOCAL),
      VDAPP_DEV_UI_URL_EXTERNAL: JSON.stringify(process.env.VDAPP_DEV_UI_URL_EXTERNAL),
      VDAPP_PRD_UI_URL_LOCAL: JSON.stringify(process.env.VDAPP_PRD_UI_URL_LOCAL),
      VDAPP_PRD_UI_URL_EXTERNAL: JSON.stringify(process.env.VDAPP_PRD_UI_URL_EXTERNAL),
      VDAPP_DEV_API_URL_LOCAL: JSON.stringify(process.env.VDAPP_DEV_API_URL_LOCAL),
      VDAPP_DEV_API_URL_EXTERNAL: JSON.stringify(process.env.VDAPP_DEV_API_URL_EXTERNAL),
      VDAPP_PRD_API_URL_LOCAL: JSON.stringify(process.env.VDAPP_PRD_API_URL_LOCAL),
      VDAPP_PRD_API_URL_EXTERNAL: JSON.stringify(process.env.VDAPP_PRD_API_URL_EXTERNAL),
      VDAPP_SENTINEL_NLOG_LOGS: JSON.stringify(process.env.VDAPP_SENTINEL_NLOG_LOGS),
      VDAPP_SENTINEL_NLOG_PROVIDER: JSON.stringify(process.env.VDAPP_SENTINEL_NLOG_PROVIDER),
      VDAPP_SENTINEL_NLOG_PROTOCOL: JSON.stringify(process.env.VDAPP_SENTINEL_NLOG_PROTOCOL),
      VDAPP_SENTINEL_NLOG_PORT: JSON.stringify(process.env.VDAPP_SENTINEL_NLOG_PORT)
    }
  })]
}
