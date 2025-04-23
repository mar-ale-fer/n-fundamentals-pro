import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

type songType = CreateSongDTO;

@Injectable()
export class SongsService {
  // local db
  // local array
  private readonly songs: songType[] = [];

  create(song: songType) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
