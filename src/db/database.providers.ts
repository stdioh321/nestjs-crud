import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'SQLITE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: 'data/db.sqlite',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];