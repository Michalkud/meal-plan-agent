import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

// Core modules (will be implemented)
// import { AgentModule } from './modules/agent/agent.module';
// import { AdaptersModule } from './modules/adapters/adapters.module';
// import { BasketModule } from './modules/basket/basket.module';
// import { MealPlanModule } from './modules/meal-plan/meal-plan.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { WsGatewayModule } from './ws-gateway/ws-gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    // AgentModule,
    // AdaptersModule,
    // BasketModule,
    // MealPlanModule,
    // AuthModule,
    // WsGatewayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 