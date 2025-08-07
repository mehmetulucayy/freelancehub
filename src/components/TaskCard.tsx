// src/components/TaskCard.tsx
import React from 'react';
import type { Task } from '../types'; 

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{task.title}</h3>
      {task.description && (
        <p className="text-sm text-gray-600 mb-2">{task.description}</p>
      )}
      <div className="flex flex-wrap gap-x-3 text-xs text-gray-500">
        {task.dueDate && (
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {task.dueDate}
          </span>
        )}
        {task.assignedTo && (
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {task.assignedTo}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;