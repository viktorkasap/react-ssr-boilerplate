import dotenv from 'dotenv'
import { DefinePlugin } from 'webpack'

import { isDev } from '../utils/env'

interface Props {
    server?: boolean
    spa?: boolean
}

dotenv.config()
const config = (isServer: boolean, spa: boolean) => ({
    IS_SERVER: isServer,
    IS_DEV: isDev,
    IS_SPA: spa,
    'process.env': {
        API: JSON.stringify(process.env.API),
        HOST: JSON.stringify(process.env.HOST)
    }
})

export const definePlugin = ({ server = false, spa = false }: Props = {}) => new DefinePlugin(config(server, spa))
