import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Cookie Policy</h1>
        <p className="text-slate-500 mb-12 text-sm uppercase tracking-wider">Last Updated: October 27, 2024</p>

        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are simple text files that are stored on your computer or mobile device by a website's server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, the website's domain name, and some digits and numbers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies to help us improve, promote, and protect our services. The cookies we use generally fall into one of the following categories:</p>
            <ul className="list-disc pl-6 space-y-4 marker:text-brand-accent">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These are strictly necessary for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.
              </li>
              <li>
                <strong className="text-white">Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                <strong className="text-white">Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. Managing Cookies</h2>
            <p>
              You can delete cookies that are already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;