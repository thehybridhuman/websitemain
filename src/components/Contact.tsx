import React, { useState } from 'react';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import ConnectRotatingWords from './ConnectRotatingWords';

interface FormData {
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const mockSubmitForm = async (data: FormData): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data.email.includes('@')) {
          reject(new Error('Invalid email address'));
          return;
        }
        
        if (data.message.length < 10) {
          reject(new Error('Message too short'));
          return;
        }

        if (Math.random() > 0.1) {
          resolve({ success: true });
        } else {
          reject(new Error('Network error'));
        }
      }, 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await mockSubmitForm(formData);
      setStatus('success');
      
      setTimeout(() => {
        setFormData({ email: '', message: '' });
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div 
            className="absolute w-[45rem] h-[45rem] bg-[#80ffdb] rounded-full filter blur-[160px] opacity-10"
            style={{
              left: '50%',
              top: '75%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
          
          <div className="fade-in-element relative z-10">
            <span className="text-[#80ffdb] text-lg italic">let's connect</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-2 mb-6 flex flex-wrap items-baseline gap-x-4">
              <span>Time to</span>
              <ConnectRotatingWords />
              <span>Your Market</span>
            </h2>
            <p className="text-[#fffcf2]/70 leading-relaxed mb-8">
              Your competitors are already exploring AI. Don't get left behind. Let's discuss how we can give you the technological edge that turns market challenges into opportunities for growth.
            </p>
          </div>

          <div className="relative fade-in-element" style={{ transitionDelay: '200ms' }}>
            <form 
              onSubmit={handleSubmit}
              className="bg-[#0a0908]/40 backdrop-blur-sm rounded-3xl p-8 border border-[#80ffdb]/10 relative z-10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0908]/60 rounded-xl border border-[#80ffdb]/20 
                      focus:border-[#80ffdb]/40 focus:ring-1 focus:ring-[#80ffdb]/40 
                      transition-colors placeholder-[#fffcf2]/30"
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0a0908]/60 rounded-xl border border-[#80ffdb]/20 
                      focus:border-[#80ffdb]/40 focus:ring-1 focus:ring-[#80ffdb]/40 
                      transition-colors placeholder-[#fffcf2]/30"
                    placeholder="Tell us about your project..."
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full px-6 py-3 bg-[#80ffdb] text-[#0a0908] rounded-xl font-medium 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                    hover:shadow-[#80ffdb]/20 active:scale-95 disabled:opacity-50 
                    disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    {status === 'loading' ? (
                      <>
                        Sending
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : status === 'success' ? (
                      <>
                        Message Sent
                        <Check className="w-4 h-4 animate-bounce" />
                      </>
                    ) : status === 'error' ? (
                      <>
                        Error Sending
                        <AlertCircle className="w-4 h-4 animate-pulse" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
                  <span className="absolute inset-0 -z-10 transition-transform duration-500 group-active:scale-[2] 
                    group-active:opacity-0 bg-white/20 scale-0 rounded-full"></span>
                </button>

                {status === 'error' && errorMessage && (
                  <div className="flex items-center justify-center gap-2 text-red-500 animate-fade-in bg-red-500/10 
                    px-4 py-2 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                {status === 'success' && (
                  <div className="flex items-center justify-center gap-2 text-[#80ffdb] animate-fade-in 
                    bg-[#80ffdb]/10 px-4 py-2 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span>We'll be in touch soon!</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}