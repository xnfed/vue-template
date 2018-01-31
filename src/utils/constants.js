import config from '../../config'
export const API_BASE_URL = process.env.NODE_ENV === 'development' ? config.dev.assetsPublicPath : config.build.assetsPublicPath


