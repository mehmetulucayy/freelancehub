// src/components/Column.tsx
import React from 'react';
import TaskCard from './TaskCard';
import type { Column as ColumnType, Task } from '../types'; 

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];   
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md w-80 flex-shrink-0">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2 border-gray-200">
        {column.title}
      </h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;