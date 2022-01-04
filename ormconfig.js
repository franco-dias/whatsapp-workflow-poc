const path = require('path');

module.exports = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'username',
  password: 'password',
  database: 'database',
  migrations: [
    path.resolve('src', 'shared', 'infra', 'typeorm', 'migrations', '*.ts')
  ],
  entities: [
    path.resolve('src', 'shared', 'infra', 'typeorm', 'entities', '*.ts')
  ],
  cli: {
    migrationsDir: path.resolve('src', 'shared', 'infra', 'typeorm', 'migrations'),
  },
}