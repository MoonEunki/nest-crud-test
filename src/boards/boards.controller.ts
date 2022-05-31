import { CreateBoardDto } from './dto/create-board-dto';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards():Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto,):Board{
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id : string):Board{
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id : string):void{
    this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id:string,
    @Body('status') status:BoardStatus,
  ):Board{
    return this.boardsService.updateBoardStatus(id,status);
  }

}
