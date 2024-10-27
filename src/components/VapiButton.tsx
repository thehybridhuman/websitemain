import React from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface VapiButtonProps {
  isRecording: boolean;
  isLoading: boolean;
  isSpeaking: boolean;
  volumeLevel: number;
  onToggle: () => void;
}

export default function VapiButton({
  isRecording,
  isLoading,
  isSpeaking,
  volumeLevel,
  onToggle
}: VapiButtonProps) {
  return (
    <button
      onClick={onToggle}
      disabled={isLoading}
      className={`p-6 rounded-full relative transition-all duration-300 transform hover:scale-105 group
        ${isRecording 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-[#0a0908] border-2 border-[#80ffdb] hover:bg-[#80ffdb] hover:text-[#0a0908]'
        }
        ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : isRecording ? (
        <MicOff className="w-6 h-6" />
      ) : (
        <Mic className="w-6 h-6" />
      )}
      
      <div 
        className={`absolute -inset-1 bg-[#80ffdb] rounded-full opacity-20 blur-md transition-transform
          ${isRecording ? 'animate-pulse scale-110' : 'group-hover:opacity-40'}
          ${isSpeaking ? 'scale-125' : ''}
        `}
        style={{
          transform: `scale(${1 + volumeLevel * 0.5})`,
        }}
      />
    </button>
  );
}