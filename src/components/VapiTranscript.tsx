import React from 'react';
import { MessageSquare } from 'lucide-react';

interface VapiTranscriptProps {
  text: string;
}

export default function VapiTranscript({ text }: VapiTranscriptProps) {
  return (
    <div className="flex items-start gap-2 max-w-md">
      <MessageSquare className="w-5 h-5 mt-1 flex-shrink-0" />
      <p className="text-[#fffcf2]/90">{text}</p>
    </div>
  );
}