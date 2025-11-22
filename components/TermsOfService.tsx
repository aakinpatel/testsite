import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12 text-sm uppercase tracking-wider">Effective Date: October 27, 2024</p>

        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TOCHMOC ("we," "us" or "our"), concerning your access to and use of the tochmoc.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. Services & Payment</h2>
            <p>
              We offer web design, development, and IT maintenance services. Specific terms regarding project scope, deliverables, and payment schedules will be outlined in individual service agreements or statements of work (SOW). All fees are due as per the agreed schedule. We reserve the right to suspend services for non-payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">4. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of the State of Florida. TOCHMOC and yourself irrevocably consent that the courts of Florida shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;