import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle, Loader2 } from 'lucide-react';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative">
      <input
        id={id}
        {...props}
        placeholder=" " // Required for peer-placeholder-shown to work
        className="peer w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pt-6 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder-transparent text-brand-900"
      />
      <label 
        htmlFor={id}
        className="absolute left-4 top-1 text-xs font-medium text-slate-500 transition-all duration-200 pointer-events-none
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:font-normal
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-brand-accent peer-focus:font-medium
        peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
      >
        {label}
      </label>
    </div>
  );
};

const FloatingTextarea: React.FC<FloatingTextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        className="peer w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pt-6 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder-transparent text-brand-900 min-h-[120px]"
      />
      <label 
        htmlFor={id}
        className="absolute left-4 top-1 text-xs font-medium text-slate-500 transition-all duration-200 pointer-events-none
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:font-normal
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-brand-accent peer-focus:font-medium
        peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
      >
        {label}
      </label>
    </div>
  );
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-brand-900 relative" aria-labelledby="contact-heading">
       {/* Corner accent */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-800 to-white" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">Let's Build Something Legendary.</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Ready to elevate your digital presence? Whether you need a complete overhaul or technical consultation, we are here to help.
              </p>
              
              <address className="space-y-4 not-italic">
                <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Email</p>
                   <a href="mailto:hello@tochmoc.com" className="text-xl font-medium hover:text-brand-accent transition-colors focus:outline-none focus:text-brand-accent focus:underline">hello@tochmoc.com</a>
                </div>
                <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Phone</p>
                   <p className="text-xl font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Office</p>
                   <p className="text-xl font-medium">San Francisco, CA</p>
                </div>
              </address>
            </div>

            <div className="relative" role="region" aria-live="polite">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-sm">
                    <CheckCircle size={40} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-serif text-brand-900 mb-2">Message Sent Successfully</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will analyze your inquiry and respond within 24 hours.</p>
                  <Button 
                    variant="outline" 
                    className="!text-brand-900 border-brand-900 hover:!bg-brand-900 hover:!text-white"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6 animate-fade-in-up" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="First Name" id="firstName" required type="text" />
                    <FloatingInput label="Last Name" id="lastName" required type="text" />
                  </div>
                  
                  <FloatingInput label="Email Address" id="email" required type="email" />

                  <div className="relative pt-2">
                    <label htmlFor="serviceInterest" className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-4 mb-1 block">Service Interest</label>
                    <select 
                      id="serviceInterest"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all appearance-none text-brand-900 cursor-pointer"
                    >
                      <option>Web Design & Development</option>
                      <option>IT Infrastructure</option>
                      <option>Maintenance</option>
                      <option>Digital Strategy</option>
                      <option>Other</option>
                    </select>
                    {/* Custom dropdown arrow could go here */}
                  </div>

                  <FloatingTextarea label="Tell us about your project..." id="message" required rows={4} />

                  <Button 
                    variant="primary" 
                    className="w-full !bg-brand-900 !text-white hover:!bg-brand-800 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                    type="submit"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} aria-hidden="true" /> 
                        Sending Inquiry...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;