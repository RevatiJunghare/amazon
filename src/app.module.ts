import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthEntity } from './auth/auth.entity';
import { ProductModule } from './products/products.module';
import { ProductEntity } from './products/products.entity';
import { WishlistEntity } from './order/wishlist.entity';
import { WishlistModule } from './order/wishlist.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    WishlistModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'amazon',
      entities:[AuthEntity,ProductEntity,WishlistEntity],
      synchronize:true
    })
  ],
})
export class AppModule {}
