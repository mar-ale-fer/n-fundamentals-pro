import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'Fetch song based on id';
  }
  @Put(':id')
  update() {
    return 'Update song based on id';
  }
  @Delete(':id')
  delete() {
    return 'Delete song based on id';
  }
}
