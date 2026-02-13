import { board } from "./board.js";
import { positionPieces } from "./pieces.js";


const boardState = positionPieces();
board(boardState);