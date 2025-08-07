// src/components/Board.tsx
import React from 'react';
import Column from './Column';
import type { Board as BoardType } from '../types'; 

interface BoardProps {
  board: BoardType;
}

const Board: React.FC<BoardProps> = ({ board }) => {

  return (
    <div className="flex space-x-6 overflow-x-auto p-4">
      {board.columnIds.map((columnId) => {
        const column = board.columns[columnId];
     
        const tasks = column.taskIds.map((taskId) => board.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks} 
          />
        );
      })}
    </div>
  );
};

export default Board;