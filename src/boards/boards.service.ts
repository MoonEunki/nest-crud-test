import { CreateBoardDto } from './dto/create-board-dto';
import { Board, BoardStatus } from './board.model';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class BoardsService {

  private boards:Board[] = []; //private로 다른곳에서 boards를 수정할수없게함

  getAllBoards():Board[] {
    return this.boards;
  }

  createBoard( createBoardDto:CreateBoardDto):Board{
    const { title, description } = createBoardDto;  
    const newBoard:Board = {
      id: randomUUID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  getBoardById(id:string):Board{
    return this.boards.find((board)=> board.id === id);
  }

}
