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
      user: 'jiaozhe',
      host: '81.70.44.252',
      ref: 'origin/master',
      repo: 'git@github.com:jiaozhe0/server-deploy-demo.git',
      path: '/home/jiaozhe/http',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
