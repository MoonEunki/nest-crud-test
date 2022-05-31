import { Board } from './board.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {

  private boards:Board[] = []; //private로 다른곳에서 boards를 수정할수없게함

  getAllBoards():Board[] {
    return this.boards;
  }

}
