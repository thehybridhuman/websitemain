import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
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
            Security Overview
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
                <h3 className="text-xl font-semibold text-[#fffcf2]">1. Executive Summary</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  At Hybrid Human, security is foundational to our operations. We implement enterprise-grade security measures across all our AI solutions while ensuring complete data sovereignty for our clients. Our security framework is built on four pillars: Infrastructure Security, Data Protection, Access Control, and Continuous Monitoring.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">2. Infrastructure Architecture</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">2.1 Deployment Model</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>All AI services are deployed exclusively on client-owned or client-designated infrastructure</li>
                    <li>Each implementation is completely isolated and containerized</li>
                    <li>Zero shared resources between different client environments</li>
                    <li>Full client control over infrastructure choices and configurations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">2.2 Network Security</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Enterprise-grade firewalls with IDS/IPS capabilities</li>
                    <li>DDoS protection</li>
                    <li>Network segregation and microsegmentation</li>
                    <li>Real-time threat detection and prevention</li>
                    <li>TLS 1.3 encryption for all data in transit</li>
                    <li>Regular penetration testing and vulnerability assessments</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">3. Data Protection</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.1 Data Sovereignty</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>All client data remains within client-controlled infrastructure</li>
                    <li>No data transfer to external systems for processing</li>
                    <li>Complete data isolation between clients</li>
                    <li>Client retains full ownership and control of all data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.2 Data Security</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>AES-256 encryption for data at rest</li>
                    <li>Zero trust architecture implementation</li>
                    <li>Regular backup verification and testing</li>
                    <li>Secure data destruction protocols</li>
                    <li>Audit trails for all data access and modifications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">3.3 AI Model Security</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Models operate exclusively within client environment</li>
                    <li>No external dependencies for inference</li>
                    <li>Secure model updates through authenticated channels</li>
                    <li>Regular model security assessments</li>
                    <li>Protection against model manipulation attempts</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">4. Access Control and Authentication</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">4.1 Identity Management</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Multi-factor authentication (MFA) mandatory</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Principle of least privilege enforcement</li>
                    <li>Regular access reviews and attestation</li>
                    <li>Automated account deprovisioning</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">4.2 Operation Security</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Privileged access management (PAM)</li>
                    <li>Just-in-time access provisioning</li>
                    <li>Secure remote access protocols</li>
                    <li>Session monitoring and recording</li>
                    <li>Comprehensive audit logging</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">5. Compliance and Certifications</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">5.1 Standards Compliance</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>SOC 2 Type II certified</li>
                    <li>ISO 27001:2013 compliant</li>
                    <li>HIPAA compliant architecture available</li>
                    <li>GDPR and PIPEDA compliant</li>
                    <li>Regular third-party security assessments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">5.2 Industry Standards</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>NIST Cybersecurity Framework adherence</li>
                    <li>CIS Critical Security Controls implementation</li>
                    <li>OWASP security practices</li>
                    <li>AI security best practices alignment</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">6. Incident Response and Business Continuity</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">6.1 Incident Management</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>24/7 Security Operations Center (SOC)</li>
                    <li>Automated threat detection and response</li>
                    <li>Incident response team on standby</li>
                    <li>Regular incident response drills</li>
                    <li>Detailed incident post-mortems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">6.2 Business Continuity</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>High availability architecture</li>
                    <li>Automated failover capabilities</li>
                    <li>Regular disaster recovery testing</li>
                    <li>Recovery time objectives (RTO) &lt; 4 hours</li>
                    <li>Recovery point objectives (RPO) &lt; 15 minutes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">7. Security Operations</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">7.1 Monitoring and Detection</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Real-time security monitoring</li>
                    <li>AI-powered threat detection</li>
                    <li>Behavioral analytics</li>
                    <li>Anomaly detection</li>
                    <li>Security information and event management (SIEM)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">7.2 Vulnerability Management</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Continuous vulnerability scanning</li>
                    <li>Regular penetration testing</li>
                    <li>Automated patch management</li>
                    <li>Third-party security assessments</li>
                    <li>Bug bounty program</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">8. Employee Security</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">8.1 Security Training</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Mandatory security awareness training</li>
                    <li>Regular phishing simulations</li>
                    <li>Role-specific security training</li>
                    <li>Security certification requirements</li>
                    <li>Continuous security education</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">8.2 Personnel Security</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Background checks for all employees</li>
                    <li>Security clearance when required</li>
                    <li>Confidentiality agreements</li>
                    <li>Clean desk policy</li>
                    <li>Regular security reviews</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#fffcf2]">9. Client Controls and Transparency</h3>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">9.1 Client Visibility</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Real-time security dashboards</li>
                    <li>Regular security reports</li>
                    <li>Access to audit logs</li>
                    <li>Compliance reporting</li>
                    <li>Security metrics and KPIs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#fffcf2] mb-2">9.2 Client Controls</h4>
                  <ul className="list-disc pl-6 space-y-1 text-[#fffcf2]/90">
                    <li>Custom security policy implementation</li>
                    <li>Security configuration options</li>
                    <li>Integration with client security tools</li>
                    <li>Custom audit requirements</li>
                    <li>Tailored compliance reporting</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#fffcf2]">10. Commitment to Security</h3>
                <p className="text-[#fffcf2]/90 leading-relaxed">
                  Our commitment to security is unwavering and continuously evolving. We maintain a dedicated security team that constantly evaluates and implements new security measures to stay ahead of emerging threats. Our security-first approach ensures that your AI implementation is not just powerful, but also trustworthy and secure.
                </p>
                <p className="text-[#fffcf2]/90 leading-relaxed mt-4">
                  For detailed security information or to schedule a security review, please contact our security team at the@hybridhuman.ai.
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