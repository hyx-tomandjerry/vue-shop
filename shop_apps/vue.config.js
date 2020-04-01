module.exports={
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    configureWebpack:{
        resolve:{
            alias:{
                'views':'@/views',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'plugins':'@/plugins'
            }
        }
    }
}
