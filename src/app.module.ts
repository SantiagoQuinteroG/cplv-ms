import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { ProductsModule } from './products/products.module';
import { PaymentsModule } from './payments/payments.module';
import { RoutesModule } from './routes/routes.module';
import { RunnersModule } from './runners/runners.module';
import { SurveyModule } from './survey/survey.module';
import { TeamsModule } from './teams/teams.module';
import { TypedocsModule } from './typedocs/typedocs.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UsersModule,
    BookingsModule,
    ProductsModule,
    PaymentsModule,
    RoutesModule,
    RunnersModule,
    SurveyModule,
    TeamsModule,
    TypedocsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
