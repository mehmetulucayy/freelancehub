// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Board from '../components/Board'; 
import type { AppData, Board as BoardType, Column, Task } from '../types'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // React Query için


const queryClient = new QueryClient();


const initialTasks: { [key: string]: Task } = {
  'task-1': { id: 'task-1', title: 'Proje Planını Hazırla', description: 'Gereksinimleri ve zaman çizelgesini belirle.', dueDate: '2025-08-01', assignedTo: 'Mehmet' },
  'task-2': { id: 'task-2', title: 'React Bileşenlerini Oluştur', description: 'Ana UI bileşenlerini kodla.', assignedTo: 'Ayşe' },
  'task-3': { id: 'task-3', title: 'API Entegrasyonu Yap', description: 'Backend ile veri alışverişini sağla.', dueDate: '2025-08-15' },
  'task-4': { id: 'task-4', title: 'Testleri Yaz', description: 'Uygulama için birim ve entegrasyon testleri.', assignedTo: 'Mehmet' },
  'task-5': { id: 'task-5', title: 'Dokümantasyonu Güncelle', description: 'Kullanım kılavuzunu ve teknik dokümanı hazırla.' },
};

const initialColumns: { [key: string]: Column } = {
  'column-1': { id: 'column-1', title: 'Yapılacaklar', taskIds: ['task-1', 'task-2'] },
  'column-2': { id: 'column-2', title: 'Devam Ediyor', taskIds: ['task-3'] },
  'column-3': { id: 'column-3', title: 'Tamamlandı', taskIds: ['task-4', 'task-5'] },
};

const initialBoard: BoardType = {
  id: 'board-1',
  title: 'Ana Proje Panosu',
  columnIds: ['column-1', 'column-2', 'column-3'],
  columns: initialColumns,
  tasks: initialTasks,
};

const initialAppData: AppData = {
  boards: {
    'board-1': initialBoard,
  },
  activeBoardId: 'board-1',
};

export default function Home() {
  const [appData, setAppData] = useState<AppData>(initialAppData);

  const activeBoard = appData.activeBoardId ? appData.boards[appData.activeBoardId] : null;

  return (

    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {activeBoard ? activeBoard.title : 'Görev Panosu'}
        </h1>
        <div className="flex justify-center">
          {activeBoard ? (
            <Board board={activeBoard} />
          ) : (
            <p className="text-center text-gray-600">Henüz aktif bir pano bulunamadı.</p>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}