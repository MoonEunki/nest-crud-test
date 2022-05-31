import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {

  private boards = []; //private로 다른곳에서 boards를 수정할수없게함

  getAllBoards() {
    return this.boards;
  }

}
