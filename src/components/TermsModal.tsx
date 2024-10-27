import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setTimeout(() => setIsAnimating(true), 50);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500
      ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div 
        className={`fixed inset-0 backdrop-blur-sm transition-all duration-500
          ${isAnimating ? 'bg-black/60' : 'bg-black/0'}
          ${isClosing ? 'bg-black/0' : ''}`}
        onClick={handleClose}
      />

      <div className={`relative w-full max-w-4xl h-[90vh] m-4 bg-[#0A0B0A] border border-[#80ffdb]/10 
        rounded-2xl shadow-xl overflow-hidden transition-all duration-500 flex flex-col
        ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
        ${isClosing ? 'opacity-0 scale-95 -translate-y-4' : ''}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#80ffdb]/10">
          <h2 className={`text-2xl font-semibold text-[#fffcf2] transition-all duration-500 delay-100
            ${isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            Terms of Service
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-[#80ffdb]/10 rounded-full transition-colors duration-300 group"
          >
            <X className="w-5 h-5 text-[#fffcf2] transition-transform duration-300 
              group-hover:rotate-90 group-hover:text-[#80ffdb]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-8 relative">
            <div className={`space-y-8 relative z-10 transition-all duration-500 delay-200
              ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="space-y-4">
                <p className="text-[#fffcf2]/60 text-sm">Last Updated: October 25, 2024</p>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  Welcome to Hybrid Human ("Service"), operated by My People Know Inc., doing business as Hybrid Human ("we," "us," "our," or "Company"). These Terms of Service ("Terms") govern your access to and use of our website (hybridhuman.ai), services, and AI-powered solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">1. Acceptance of Terms</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">2. Services Description</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  Hybrid Human provides artificial intelligence solutions including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                  <li>Document Intelligence systems</li>
                  <li>Workflow Automation solutions</li>
                  <li>AI Voice Operations</li>
                  <li>Custom AI Agents</li>
                  <li>Related consulting and implementation services</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">3. Account Registration</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">3.1 Account Creation</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration.
                  </p>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">3.2 Account Security</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">4. Use of Services</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">4.1 Permitted Use</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">You agree to use the Service only for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>Lawful purposes</li>
                    <li>Purposes permitted by these Terms</li>
                    <li>Purposes aligned with the Service's intended functionality</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">4.2 Prohibited Use</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">You shall not:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>License, sell, or transfer your access rights</li>
                    <li>Modify, decrypt, or reverse engineer any part of the Service</li>
                    <li>Use the Service for unauthorized automated data collection</li>
                    <li>Upload malicious code or content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our AI systems for harmful, discriminatory, or illegal purposes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">5. Intellectual Property</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">5.1 Ownership</h4>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>The Service, including all content, features, and functionality, is owned by My People Know Inc.</li>
                    <li>Our AI models, algorithms, and related technologies remain our exclusive property</li>
                    <li>Training data provided by users remains their property, subject to our usage rights</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">5.2 License</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable license to use our Service subject to these Terms.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">6. Data Usage and Privacy</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">6.1 Data Collection</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    We collect and process data as described in our Privacy Policy, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>Account information</li>
                    <li>Usage data</li>
                    <li>AI interaction data</li>
                    <li>Business process data</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">6.2 AI Training</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    You grant us the right to use anonymized data to improve our AI systems while maintaining confidentiality of your business information.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">7. Payment Terms</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">7.1 Fees</h4>
                  <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                    <li>Fees are as specified in your service agreement</li>
                    <li>All fees are non-refundable unless otherwise stated</li>
                    <li>We reserve the right to modify fees with 30 days notice</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">7.2 Payment</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    Payment terms require a non-refundable deposit of fifty percent (50%) of the total project fee prior to project initiation, with the remaining fifty percent (50%) balance due in full prior to production deployment. No production deployment will occur until final payment is received. Late payments may result in service suspension and/or project delays. All applicable taxes are additional and will be included in the invoiced amounts. We reserve the right to charge interest on late payments at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">8. Warranty and Disclaimer</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">8.1 Service Warranty</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    We warrant that the Service will perform substantially in accordance with our service specifications.
                  </p>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">8.2 Disclaimer</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    THE SERVICE IS PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND. WE SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">9. Limitation of Liability</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">10. Indemnification</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  You agree to indemnify and hold harmless My People Know Inc., its officers, directors, employees, and agents from any claims arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#fffcf2]/90">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">11. Term and Termination</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#fffcf2]">11.1 Term</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    These Terms remain in effect until terminated by either party.
                  </p>
                  <h4 className="text-lg font-semibold text-[#fffcf2]">11.2 Termination</h4>
                  <p className="text-[#fffcf2]/90 leading-relaxed">
                    We may terminate or suspend your access immediately if you violate these Terms.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">12. Changes to Terms</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">13. Governing Law</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">14. Contact Information</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <div className="text-[#fffcf2]/90 leading-relaxed">
                  <p>Mailing Address:</p>
                  <p>My People Know Inc. (dba Hybrid Human)</p>
                  <p>100 King Street West</p>
                  <p>Suite 5700</p>
                  <p>Toronto, Ontario</p>
                  <p>Canada M5X 1C7</p>
                  <p>Email: the@hybridhuman.ai</p>
                  <p>Website: hybridhuman.ai</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">15. Severability</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.
                </p>
              </div>

              <p className="text-[#fffcf2]/90 leading-relaxed mt-8">
                By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

            {/* Glow effect */}
            <div 
              className={`fixed w-[45rem] h-[45rem] bg-[#80ffdb] rounded-full filter blur-[160px] transition-opacity duration-1000
                ${isAnimating ? 'opacity-5' : 'opacity-0'}`}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}