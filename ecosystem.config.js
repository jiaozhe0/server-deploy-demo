module.exports = {
  apps: [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'root',
      host: '192.168.99.12',
      ref: 'origin/master',
      repo: 'git@github.com:jiaozhe0/server-deploy-demo.git',
      path: '/root/jiaozhe/http',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
