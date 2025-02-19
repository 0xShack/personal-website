import { useState, useCallback, useRef } from 'react';
import { GameState, Direction, Position } from './types';

const BOARD_SIZE = 20;
const INITIAL_SPEED = 150;

const createInitialState = (): GameState => ({
  snake: [{ x: 10, y: 10 }],
  food: { x: 15, y: 15 },
  direction: 'RIGHT',
  isGameOver: false,
  score: 0,
});

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>(createInitialState());
  const [isRunning, setIsRunning] = useState(false);
  const gameLoop = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((): Position => {
    const newFood = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
    return newFood;
  }, []);

  const moveSnake = useCallback(() => {
    setGameState(prevState => {
      if (prevState.isGameOver) return prevState;

      const newHead = { ...prevState.snake[0] };
      switch (prevState.direction) {
        case 'UP':
          newHead.y -= 1;
          break;
        case 'DOWN':
          newHead.y += 1;
          break;
        case 'LEFT':
          newHead.x -= 1;
          break;
        case 'RIGHT':
          newHead.x += 1;
          break;
      }

      // Check collision with walls
      if (
        newHead.x < 0 ||
        newHead.x >= BOARD_SIZE ||
        newHead.y < 0 ||
        newHead.y >= BOARD_SIZE
      ) {
        return { ...prevState, isGameOver: true };
      }

      // Check collision with self
      if (prevState.snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        return { ...prevState, isGameOver: true };
      }

      const newSnake = [newHead, ...prevState.snake];
      
      // Check if food is eaten
      if (newHead.x === prevState.food.x && newHead.y === prevState.food.y) {
        return {
          ...prevState,
          snake: newSnake,
          food: generateFood(),
          score: prevState.score + 1,
        };
      }

      newSnake.pop();
      return { ...prevState, snake: newSnake };
    });
  }, [generateFood]);

  const startGame = useCallback(() => {
    setGameState(createInitialState());
    setIsRunning(true);
    if (gameLoop.current) clearInterval(gameLoop.current);
    gameLoop.current = setInterval(moveSnake, INITIAL_SPEED);
  }, [moveSnake]);

  const togglePause = useCallback(() => {
    setIsRunning(prev => {
      if (prev) {
        if (gameLoop.current) clearInterval(gameLoop.current);
      } else {
        gameLoop.current = setInterval(moveSnake, INITIAL_SPEED);
      }
      return !prev;
    });
  }, [moveSnake]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameState.isGameOver) return;

    const keyDirections: { [key: string]: Direction } = {
      ArrowUp: 'UP',
      ArrowDown: 'DOWN',
      ArrowLeft: 'LEFT',
      ArrowRight: 'RIGHT',
    };

    const newDirection = keyDirections[event.key];
    if (!newDirection) return;

    setGameState(prevState => {
      // Prevent 180-degree turns
      const invalidMoves = {
        UP: 'DOWN',
        DOWN: 'UP',
        LEFT: 'RIGHT',
        RIGHT: 'LEFT',
      };

      if (invalidMoves[newDirection] === prevState.direction) {
        return prevState;
      }

      return { ...prevState, direction: newDirection };
    });
  }, [gameState.isGameOver]);

  return {
    gameState,
    startGame,
    handleKeyPress,
    isRunning,
    togglePause,
  };
}; 