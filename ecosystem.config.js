module.exports = {
  apps: [{
    script: 'index.js',
    watch: '.',
    "env": {
      "COMMON_VARIABLE": "true"
    },
    "env_production": {
      "NODE_EMV": "production"
    }
  },
  ],

  deploy: {
    production: {
      user: 'pc',
      host: '39.100.244.161',
      ref: 'origin/master',
      repo: 'git@github.com:jiaozhe0/server-deploy-demo.git',
      path: '/home/pc/test',
      'pre-deploy-local': '',
      // 'post-deploy': 'pm2 reload ecosystem.config.js --env production',
      'post-deploy': 'pm2 -v',
      'pre-setup': ''
    }
  }
};
