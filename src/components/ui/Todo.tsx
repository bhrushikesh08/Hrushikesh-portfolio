import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface TodoProps {
  message?: string;
}

export const Todo: React.FC<TodoProps> = ({ message = 'Needs Confirmation' }) => {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 tracking-wide uppercase shadow-sm"
      role="status"
      title={message}
    >
      <AlertCircle className="w-3 h-3 text-amber-400" />
      <span>TODO: {message}</span>
    </span>
  );
};
