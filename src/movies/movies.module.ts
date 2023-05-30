import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  // defendency injection: provide service to controller
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
