import axios from 'axios';
// import utility from 'ct-utility';

const codes = {
    401: '没有登录',
    403: '没有权限',
    10000: '参数异常',
    19999: '系统异常'
};

const vueHttp = {
    install(vue){
        //请求前的拦截
        axios.interceptors.request.use(config => {
            if (config.method === 'get'){
                if (!config.params){
                    config.params = {};
                }
                config.params._ = new Date().getTime();

                if (config.cache === true){
                    config.params._ = undefined;
                }
            }
            
            return config;
        }, error => Promise.reject(error));

        // 请求结果的拦截
        axios.interceptors.response.use(response => {
            const data = response.data;
            
            if (data.Code !== 0){
                return Promise.reject(codes[data.Code]);
            }
            
            return data;
        }, error => {
            if (error.request){
                error = codes[error.request.status];
            }
            return Promise.reject(error || '系统繁忙');
        });
          
        vue.prototype.$http = axios;
    }
};

export default vueHttp;
