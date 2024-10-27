import { useState, useCallback, useRef, useEffect } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_KEY = 'c320f98c-6fbd-4b8b-81fc-e39bb85531a0';
const ASSISTANT_ID = '22a936ad-4a11-40e2-8d7c-adf7116d5035';

export function useVapiRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  
  const vapiRef = useRef<Vapi | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout>();

  const cleanup = useCallback(() => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
    if (vapiRef.current) {
      try {
        vapiRef.current.stop();
        vapiRef.current = null;
      } catch (e) {
        console.error('Error during cleanup:', e);
      }
    }
    setIsRecording(false);
    setIsSpeaking(false);
    setVolumeLevel(0);
  }, []);

  const checkMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (err) {
      console.error('Microphone permission error:', err);
      setError('Please allow microphone access to use the voice assistant');
      return false;
    }
  }, []);

  const initializeVapi = useCallback(async () => {
    cleanup();
    
    try {
      if (!await checkMicrophonePermission()) {
        return false;
      }

      vapiRef.current = new Vapi(VAPI_KEY);
      
      vapiRef.current.on('speech-start', () => setIsSpeaking(true));
      vapiRef.current.on('speech-end', () => setIsSpeaking(false));
      vapiRef.current.on('volume-level', (level) => setVolumeLevel(level));
      vapiRef.current.on('call-end', () => {
        setIsRecording(false);
        setIsSpeaking(false);
        cleanup();
      });
      vapiRef.current.on('message', (message) => {
        if (message.type === 'transcript') {
          setTranscript(prev => (prev + ' ' + message.transcript).trim());
        }
      });
      vapiRef.current.on('error', (err) => {
        console.error('VAPI error:', err);
        setError('Connection lost. Please try again.');
        cleanup();
      });

      return true;
    } catch (err) {
      console.error('Failed to initialize VAPI client:', err);
      setError('Failed to initialize voice assistant');
      return false;
    }
  }, [cleanup, checkMicrophonePermission]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const startRecording = useCallback(async () => {
    setError(null);
    setTranscript('');
    setIsLoading(true);

    try {
      if (!await initializeVapi()) {
        throw new Error('Failed to initialize voice assistant');
      }

      await vapiRef.current?.start(ASSISTANT_ID);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording:', err);
      setError('Failed to start recording. Please check your microphone permissions.');
      cleanup();
    } finally {
      setIsLoading(false);
    }
  }, [initializeVapi, cleanup]);

  const stopRecording = useCallback(() => {
    cleanup();
  }, [cleanup]);

  return {
    isRecording,
    isLoading,
    error,
    transcript,
    isSpeaking,
    volumeLevel,
    startRecording,
    stopRecording,
  };
}