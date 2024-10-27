import React, { useEffect } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { useVapiRecorder } from '../hooks/useVapiRecorder';
import VapiError from './VapiError';
import VapiTranscript from './VapiTranscript';
import VapiButton from './VapiButton';

export default function VapiRecorder() {
  const {
    isRecording,
    isLoading,
    error,
    transcript,
    isSpeaking,
    volumeLevel,
    startRecording,
    stopRecording,
  } = useVapiRecorder();

  useEffect(() => {
    return () => {
      stopRecording();
    };
  }, [stopRecording]);

  return (
    <div className="flex flex-col items-center gap-6">
      <VapiButton 
        isRecording={isRecording}
        isLoading={isLoading}
        isSpeaking={isSpeaking}
        volumeLevel={volumeLevel}
        onToggle={isRecording ? stopRecording : startRecording}
      />

      <div className="flex flex-col items-center gap-4 min-h-[100px]">
        {error && <VapiError message={error} />}
        {transcript && <VapiTranscript text={transcript} />}
        <span className="text-[#fffcf2] text-lg">
          {isRecording ? 'Call is active... click to end' : 'Speak to Hybrid Human'}
        </span>
      </div>
    </div>
  );
}