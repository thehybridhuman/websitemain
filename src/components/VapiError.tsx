import React from 'react';
import { AlertCircle } from 'lucide-react';

interface VapiErrorProps {
  message: string;
}

export default function VapiError({ message }: VapiErrorProps) {
  return (
    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-2 rounded-lg">
      <AlertCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}