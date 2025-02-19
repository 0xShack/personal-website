import React from 'react';
import { GameState, Position } from './types';
import styles from './SnakeGame.module.css';

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  const BOARD_SIZE = 20;
  const board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null));

  const isSnake = (pos: Position) =>
    gameState.snake.some(segment => segment.x === pos.x && segment.y === pos.y);

  const isFood = (pos: Position) =>
    gameState.food.x === pos.x && gameState.food.y === pos.y;

  return (
    <div className={styles.gameBoard}>
      {board.map((row, y) => (
        <div key={y} className={styles.row}>
          {row.map((_: null, x: number) => (
            <div
              key={`${x}-${y}`}
              className={`${styles.cell} ${
                isSnake({ x, y }) ? styles.snake : ''
              } ${isFood({ x, y }) ? styles.food : ''}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}; 