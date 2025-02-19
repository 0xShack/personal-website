'use client';

import React, { useEffect, useState } from 'react';
import { GameBoard } from './GameBoard';
import { useGameLogic } from './useGameLogic';
import styles from './SnakeGame.module.css';

export const SnakeGame: React.FC = () => {
  const {
    gameState,
    startGame,
    handleKeyPress,
    isRunning,
    togglePause,
  } = useGameLogic();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // Add this useEffect to prevent scrolling while game is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreBoard}>
        Score: {gameState.score}
      </div>
      <GameBoard gameState={gameState} />
      <div className={styles.controls}>
        <button 
          onClick={gameState.isGameOver ? startGame : togglePause}
          className={styles.button}
        >
          {gameState.isGameOver 
            ? 'Start New Game' 
            : (gameState.isFirstGame 
                ? 'Start' 
                : (isRunning ? 'Pause' : 'Resume'))}
        </button>
      </div>
    </div>
  );
}; 