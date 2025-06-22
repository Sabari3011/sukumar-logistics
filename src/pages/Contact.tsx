import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { contactData } from '../data/contactData.js';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly.');
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Phone, Mail, MapPin, MessageCircle
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent style={{color : "white"}} className="h-6 w-6" /> : null;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8 text-shadow">{contactData.title}</h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-2xl max-w-3xl mx-auto opacity-90 text-shadow leading-relaxed">
              {contactData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Booking Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover-3d animate-on-scroll">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h2 style={{lineHeight: "normal"}} className="text-3xl font-bold text-gray-900 gradient-text">
                  {contactData.formFields.title}
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {contactData.formFields.fields.map((field, index) => (
                  <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.05}s` }}>
                    <label htmlFor={field.name} className="block text-sm font-bold text-gray-700 mb-3">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    
                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                        rows={4}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover-3d shadow-2xl animate-pulse-glow"
                >
                  <span className="flex items-center justify-center">
                    Submit Booking Request
                    <Send className="ml-3 h-6 w-6" />
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-2xl p-10 hover-3d animate-on-scroll">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 gradient-text">
                    {contactData.contactInfo.title}
                  </h2>
                </div>
                <div className="space-y-6">
                  {contactData.contactInfo.details.map((detail, index) => (
                    <a
                      key={index}
                      href={detail.action}
                      className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 group hover-lift"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIcon(detail.icon)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{detail.title}</h3>
                        <p className="text-gray-600 font-medium">{detail.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl shadow-2xl p-10 hover-3d animate-on-scroll">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 gradient-text">
                    {contactData.businessHours.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {contactData.businessHours.hours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-gray-700">{hour.day}</span>
                      <span className={`font-semibold ${
                        hour.day === 'Emergency Service' ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl shadow-2xl p-10 text-center hover-3d animate-on-scroll">
                <div className="animate-float mb-6">
                  <Clock className="h-16 w-16 mx-auto opacity-80" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-shadow">
                  {contactData.callToAction.title}
                </h2>
                <p className="mb-8 opacity-90 text-lg text-shadow">
                  {contactData.callToAction.subtitle}
                </p>
                <a
                  href={`tel:${contactData.callToAction.phone}`}
                  className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover-3d shadow-2xl"
                >
                  <span className="flex items-center">
                    {contactData.callToAction.buttonText}: {contactData.callToAction.phone}
                    <CheckCircle className="ml-3 h-6 w-6" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;