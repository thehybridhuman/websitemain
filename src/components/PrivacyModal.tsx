import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
            Privacy Policy
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">1. Introduction</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  My People Know Inc., doing business as Hybrid Human ("we," "our," or "us"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (hybridhuman.ai) and our AI-powered services ("Services").
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">2. Contact Information</h3>
                <div className="text-[#fffcf2]/90 leading-relaxed">
                  <p className="font-semibold">Data Protection Officer</p>
                  <p>My People Know Inc. (dba Hybrid Human)</p>
                  <p>100 King Street West</p>
                  <p>Suite 5700</p>
                  <p>Toronto, Ontario</p>
                  <p>Canada M5X 1C7</p>
                  <p>Email: the@hybridhuman.ai</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">3. Information We Collect</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.1 Personal Information</h4>
                  <p className="text-[#fffcf2]/90 mb-2">We collect information that you provide directly to us:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Name and contact information</li>
                    <li>Business information</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Communication preferences</li>
                    <li>Service configuration settings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.2 AI Service Data</h4>
                  <p className="text-[#fffcf2]/90 mb-2">Through our AI-powered services, we collect:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Document contents and metadata</li>
                    <li>Voice recordings and transcripts</li>
                    <li>Workflow process data</li>
                    <li>User interaction data with AI agents</li>
                    <li>Performance metrics and analytics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.3 Automated Information</h4>
                  <p className="text-[#fffcf2]/90 mb-2">We automatically collect:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Log data and device information</li>
                    <li>IP addresses and location data</li>
                    <li>Browser type and settings</li>
                    <li>Usage patterns and preferences</li>
                    <li>Performance metrics and error reports</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">4. How We Use Your Information</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">4.1 Service Provision</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Operating and maintaining our Services</li>
                    <li>Processing and completing transactions</li>
                    <li>Providing customer support</li>
                    <li>Personalizing user experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">4.2 AI Training and Improvement</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Training and improving our AI models</li>
                    <li>Enhancing accuracy and performance</li>
                    <li>Developing new features and capabilities</li>
                    <li>Analyzing usage patterns and trends</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">4.3 Communication</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Sending service updates and notifications</li>
                    <li>Providing technical support</li>
                    <li>Responding to inquiries</li>
                    <li>Marketing communications (with consent)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">5. Data Processing and Storage</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">5.1 Data Location</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Primary data storage: Canada</li>
                    <li>Backup locations: Secure facilities in Canada and the United States</li>
                    <li>Cloud services: Enterprise-grade providers with appropriate certifications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">5.2 Data Retention</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Account information: Duration of active account plus 2 years</li>
                    <li>AI training data: Retained in anonymized form</li>
                    <li>Transaction records: 7 years (as required by law)</li>
                    <li>Marketing data: Until consent withdrawal</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">6. Data Sharing and Disclosure</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">6.1 Third-Party Service Providers</h4>
                  <p className="text-[#fffcf2]/90 mb-2">We may share data with:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Cloud infrastructure providers</li>
                    <li>Payment processors</li>
                    <li>Analytics services</li>
                    <li>Customer support tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">6.2 Business Transfers</h4>
                  <p className="text-[#fffcf2]/90 mb-2">Information may be transferred as part of a:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Merger or acquisition</li>
                    <li>Sale of company assets</li>
                    <li>Corporate restructuring</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">6.3 Legal Requirements</h4>
                  <p className="text-[#fffcf2]/90 mb-2">We may disclose information:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>To comply with laws</li>
                    <li>To respond to legal requests</li>
                    <li>To protect our rights and safety</li>
                    <li>To prevent fraud or abuse</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">7. Your Privacy Rights</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">7.1 Access and Control</h4>
                  <p className="text-[#fffcf2]/90 mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request data deletion</li>
                    <li>Export your data</li>
                    <li>Withdraw consent</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">7.2 Data Portability</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Request a copy of your data</li>
                    <li>Receive data in a structured format</li>
                    <li>Transfer data to another service</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">8. Data Security</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">8.1 Protection Measures</h4>
                  <p className="text-[#fffcf2]/90 mb-2">We implement:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Enterprise-grade encryption</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits</li>
                    <li>Employee training</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">8.2 Breach Notification</h4>
                  <p className="text-[#fffcf2]/90 mb-2">In case of a data breach, we will:</p>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Notify affected users promptly</li>
                    <li>Cooperate with authorities</li>
                    <li>Take remedial actions</li>
                    <li>Provide guidance on protective measures</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">9. International Data Transfers</h3>
                <p className="text-[#fffcf2]/90 mb-2">We comply with:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                  <li>PIPEDA (Canada)</li>
                  <li>GDPR (European Union)</li>
                  <li>CCPA (California)</li>
                  <li>Other applicable privacy laws</li>
                </ul>
                <p className="text-[#fffcf2]/90 mt-4 mb-2">Data transfers outside Canada are protected by:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                  <li>Standard contractual clauses</li>
                  <li>Data processing agreements</li>
                  <li>Privacy Shield certification (where applicable)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">10. Children's Privacy</h3>
                <p className="text-[#fffcf2]/90">
                  We do not knowingly collect or solicit information from anyone under 18 years of age.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">11. Cookie Policy</h3>
                <p className="text-[#fffcf2]/90 mb-2">We use cookies and similar technologies for:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                  <li>Essential service functionality</li>
                  <li>Performance monitoring</li>
                  <li>Analytics and optimization</li>
                  <li>User preference storage</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">12. Changes to This Policy</h3>
                <p className="text-[#fffcf2]/90 mb-2">
                  We may update this Privacy Policy periodically. We will notify you of any material changes through:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                  <li>Email notification</li>
                  <li>Website announcement</li>
                  <li>Service notification</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">13. Consent</h3>
                <p className="text-[#fffcf2]/90">
                  By using our Services, you consent to this Privacy Policy and our data practices. You may withdraw consent at any time, subject to legal and contractual restrictions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">14. Questions and Complaints</h3>
                <p className="text-[#fffcf2]/90 mb-2">For privacy-related questions or complaints:</p>
                <ol className="list-decimal pl-6 space-y-1 text-[#fffcf2]/90">
                  <li>Contact our Data Protection Officer</li>
                  <li>File a complaint with the Privacy Commissioner of Canada</li>
                  <li>Contact your local data protection authority</li>
                </ol>
                <p className="text-[#fffcf2]/90 mt-4">
                  Your privacy rights are important to us, and we are committed to addressing your concerns promptly and thoroughly.
                </p>
              </div>
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