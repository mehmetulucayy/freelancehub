// src/types.ts

export type Task = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  assignedTo?: string;
};

export type Column = {
  id: string;
  title: string;
  taskIds: string[]; 
};

export type Board = {
  id: string;
  title: string;
  columnIds: string[]; 
  columns: { [key: string]: Column }; 
  tasks: { [key: string]: Task };    
};


export type AppData = {
  boards: { [key: string]: Board };
  activeBoardId: string | null;
};