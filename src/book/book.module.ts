import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { book } from './entity/book.entity';
import { Library } from './entity/Library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([book,Library])],
  providers: [BookService],
  controllers: [BookController],
  exports: [TypeOrmModule]
})
export class BookModule {}
