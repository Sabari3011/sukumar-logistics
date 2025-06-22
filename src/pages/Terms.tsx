import React, { useEffect, useRef } from 'react';
import { FileText, Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';
import { termsData } from '../data/termsData.js';

const Terms: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 animate-float">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 style={{textShadow : "0 1px 1px rgb(255 255 255 / 100%)"}} className="text-6xl font-bold mb-6  gradient-text">
              {termsData.title}
            </h1>
          </div>
         { /*<div className="animate-fade-in-up animation-delay-200">
            <p className="text-2xl opacity-90 text-shadow">
              Last updated: {termsData.lastUpdated}
            </p>
          </div> */}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-10 rounded-3xl mb-16 hover-3d animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{termsData.introduction}</p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-10">
            {termsData.sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-xl p-10 hover-3d card-3d animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 gradient-text">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-4 group">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 text-shadow">{termsData.contact.title}</h2>
            <p className="text-2xl mb-12 opacity-90 text-shadow leading-relaxed">
              {termsData.contact.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-8 bg-white/10 rounded-3xl backdrop-blur-sm hover-3d animate-on-scroll">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <span className="font-bold text-xl">Phone</span>
              <a 
                href={`tel:${termsData.contact.phone}`} 
                className="hover:text-blue-200 transition-colors text-lg font-medium"
              >
                {termsData.contact.phone}
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-8 bg-white/10 rounded-3xl backdrop-blur-sm hover-3d animate-on-scroll animation-delay-200">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <span className="font-bold text-xl">Email</span>
              <a 
                href={`mailto:${termsData.contact.email}`} 
                className="hover:text-blue-200 transition-colors text-lg font-medium"
              >
                {termsData.contact.email}
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-8 bg-white/10 rounded-3xl backdrop-blur-sm hover-3d animate-on-scroll animation-delay-400">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <span className="font-bold text-xl">Address</span>
              <p className="text-center opacity-90 leading-relaxed">{termsData.contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <span className="text-xl font-semibold text-gray-800">Agreement Confirmation</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            By continuing to use our services, you acknowledge that you have read, understood, 
            and agree to be bound by these terms and conditions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;