module.exports = {
  apps: [
    {
      name: "ondeck-web",
      script: "npm",
      args: "start",
      env: {
        NEXT_PUBLIC_APP_ENV: "development"
      },
      env_staging: {
        NEXT_PUBLIC_APP_ENV: "staging"
      },
      env_production: {
        NEXT_PUBLIC_APP_ENV: "production"
      }
    }
  ]
};
