const isProd = process.env.NODE_ENV === 'production';

const config = isProd ? require('./prod') : require('./dev');

exports.config = config;
