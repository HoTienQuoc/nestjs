import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from 'src/core/middleware/auth.middleware';
import { RouteInfo } from '@nestjs/common/interfaces';

@Module({
  imports: [TaskModule, UserModule],
  controllers: [],
  providers: [],
})
export class DomainModule {
  public jsonBodyRoutes: Array<RouteInfo> = [
    {
      path: "*",
      method: RequestMethod.ALL,
    },
  ];

  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...this.jsonBodyRoutes);
  }
}
