import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthEntity } from './auth/auth.entity';
import { ProductModule } from './products/products.module';
import { ProductEntity } from './products/products.entity';
import { WishlistEntity } from './wishlist/wishlist.entity';
import { WishlistModule } from './wishlist/wishlist.module';
import { OrderModule } from './order/order.module';
import { OrderedProductsEntity } from './order/orderedproducts.entity';
import { OrderEntity } from './order/order.entity';
import { MediaModule } from './media/media.module';
import { MediaEntity } from './media/media.entity';
import { ConfigModule } from '@nestjs/config';
import { TransactionEntity } from './transaction/transaction.entity';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    WishlistModule,
    OrderModule,
    MediaModule,
    TransactionModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'amazon',
      entities:[AuthEntity,ProductEntity,WishlistEntity,OrderEntity,OrderedProductsEntity,MediaEntity,TransactionEntity],
      synchronize:true
    }),
    ConfigModule.forRoot({isGlobal:true})
  ],
})
export class AppModule {}
