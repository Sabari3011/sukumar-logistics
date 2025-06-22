import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  DollarSign, 
  Shield, 
  Clock, 
  Calendar,
  Truck,
  Package,
  Car,
  Construction,
  CheckCircle,
  Flame
} from 'lucide-react';
import { homeData } from '../data/homeData.js';
import logistics from '../../assets/logistics.jpg';
// import logistics from '../../assets/logistics.jpg';

const Home: React.FC = () => {
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

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Truck, Package, Car, Construction, DollarSign, Shield, Clock, Calendar
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: `url(${homeData.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-blue-400/30 rounded-full animate-float"></div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4" style={{display : 'flex' , flexDirection : 'column'}}>
         {/* <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text leading-tight">
              {homeData.hero.title}
            </h1>
          </div>*/}
          <div className="animate-fade-in-up animation-delay-200">
            <p style={{fontWeight : "bold"}}  className="text-2xl md:text-3xl mb-4 text-shadow font-light">
              {homeData.hero.subtitle}
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-400">
            <p  style={{fontWeight : "400"}}  className="text-xl mb-12 opacity-90 text-shadow max-w-3xl mx-auto leading-relaxed">
              {homeData.hero.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            {homeData.hero.ctaButtons.map((button, index) => (
              <Link
                key={index}
                to={button.link}
                style={{textAlign : 'center'}}
                className={`group px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover-3d ${
                  button.primary
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl animate-pulse-glow'
                    : 'bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 glass'
                }`}
              >
                <span className="flex items-center">
                  {button.text}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        */}
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <h2  className="text-5xl font-bold text-gray-900 gradient-text leading-tight">
                {homeData.about.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {homeData.about.content}
              </p>
              <div className="grid grid-cols-3 gap-6">
                {homeData.about.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift card-3d animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {highlight.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {highlight.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-lg"></div>
              <img
                src= {logistics}
                alt="Logistics Fleet"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-700 hover-tilt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h1 style={{fontSize : "3rem"}} className="font-bold text-gray-900 mb-2 gradient-text">
              {homeData.services.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional vehicle rental solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.services.items.map((service, index) => (
              <div
                key={index}
                className="group perspective-1000 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card h-80">
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-white rounded-2xl shadow-xl ">
                      <div className="relative h-48 ">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="p-3 bg-blue-600 rounded-full">
                            {getIcon(service.icon)}
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    {/* Back */}
                    <div className="flip-card-back bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 flex flex-col justify-center items-center">
                      <div className="p-4 bg-white/20 rounded-full mb-4">
                        {getIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-center mb-6 opacity-90">{service.description}</p>
                      <Link
                        to="/services"
                        className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 style={{lineHeight: "normal"}} className="text-5xl font-bold text-gray-900 mb-2 gradient-text">
              {homeData.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the logistics industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover-3d card-3d animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {getIcon(reason.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 style={{lineHeight: "normal"}} className="text-5xl font-bold text-gray-900 mb-6 gradient-text">
              {homeData.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">Trusted by businesses across India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.testimonials.reviews.map((review, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover-lift card-3d animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">"</span>
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-blue-600 font-medium">{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-5xl font-bold mb-8 text-shadow">Ready to Get Started?</h2>
            <p className="text-2xl mb-12 opacity-90 text-shadow leading-relaxed">
              Contact us today for professional logistics solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover-3d shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Book Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <a
                href={`tel:${homeData.contact.phone}`}
                className="group px-10 py-5 border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 glass"
              >
                <span className="flex items-center justify-center">
                  Call: {homeData.contact.phone}
                  <CheckCircle className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;