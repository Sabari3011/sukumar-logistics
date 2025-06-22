import deliveryVan from '../../assets/deliveryVan.jpg';
import truck from '../../assets/truck.jpg';
import machines from '../../assets/machines.jpg';
export const serviceData = {
  overview: {
    title: "Our Services",
    description: "We offer flexible rental solutions for all types of vehicles, whether you need them for a few hours, days, weeks, or months. Our services include both self-drive and chauffeur-driven options to meet your specific requirements.",
    features: [
      "Daily, Weekly & Monthly Rentals",
      "With or Without Driver",
      "Corporate Packages Available",
      "24/7 Roadside Assistance",
      "Flexible Pick-up & Drop-off",
      "Comprehensive Insurance Coverage"
    ]
  },
  fleetCategories: [
    {
      id: "trucks",
      title: "Heavy Duty Trucks",
      description: "Our heavy-duty trucks are perfect for long-distance transportation and large cargo loads. All vehicles are regularly maintained and equipped with GPS tracking.",
      image: truck ,
      vehicles: [
        {
          name: "Tata 1613 Truck",
          capacity: "16 Tons",
          features: ["GPS Tracking", "Air Conditioning", "Power Steering"],
          hourlyRate: "₹800",
          dailyRate: "₹8,000",
          weeklyRate: "₹50,000"
        },
        {
          name: "Ashok Leyland 2518",
          capacity: "25 Tons",
          features: ["GPS Tracking", "Air Conditioning", "Hydraulic Brakes"],
          hourlyRate: "₹1,200",
          dailyRate: "₹12,000",
          weeklyRate: "₹75,000"
        },
        {
          name: "Mahindra Blazo",
          capacity: "31 Tons",
          features: ["GPS Tracking", "Cruise Control", "Anti-lock Braking"],
          hourlyRate: "₹1,500",
          dailyRate: "₹15,000",
          weeklyRate: "₹95,000"
        }
      ]
    },
    {
      id: "vans",
      title: "Mini Trucks & Delivery Vans",
      description: "Perfect for city deliveries, small cargo transportation, and last-mile connectivity. Efficient and economical for urban logistics.",
      image: deliveryVan,
      vehicles: [
        {
          name: "Tata Ace",
          capacity: "750 Kg",
          features: ["Compact Size", "Fuel Efficient", "Easy Maneuvering"],
          hourlyRate: "₹300",
          dailyRate: "₹2,500",
          weeklyRate: "₹15,000"
        },
        {
          name: "Mahindra Bolero Pickup",
          capacity: "1 Ton",
          features: ["4WD Option", "Powerful Engine", "Robust Build"],
          hourlyRate: "₹400",
          dailyRate: "₹3,500",
          weeklyRate: "₹20,000"
        },
        {
          name: "Force Traveller",
          capacity: "1.5 Tons",
          features: ["Spacious Cargo", "Comfortable Cabin", "Reliable Performance"],
          hourlyRate: "₹500",
          dailyRate: "₹4,500",
          weeklyRate: "₹28,000"
        }
      ]
    },
    {
      id: "cars",
      title: "Corporate & Personal Cars",
      description: "Professional transportation solutions for corporate clients and personal use. Well-maintained vehicles with experienced chauffeurs available.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
      vehicles: [
        {
          name: "Maruti Dzire",
          capacity: "4 Seater",
          features: ["Air Conditioning", "Music System", "Comfortable Seating"],
          hourlyRate: "₹200",
          dailyRate: "₹2,000",
          weeklyRate: "₹12,000"
        },
        {
          name: "Toyota Innova",
          capacity: "7 Seater",
          features: ["Spacious Interior", "Premium Comfort", "Advanced Safety"],
          hourlyRate: "₹350",
          dailyRate: "₹3,500",
          weeklyRate: "₹22,000"
        },
        {
          name: "Honda City",
          capacity: "4 Seater",
          features: ["Premium Interior", "Smooth Drive", "Latest Features"],
          hourlyRate: "₹250",
          dailyRate: "₹2,500",
          weeklyRate: "₹16,000"
        }
      ]
    },
    {
      id: "heavy",
      title: "Heavy Vehicles & Machinery",
      description: "Specialized heavy vehicles for construction, mining, and industrial applications. Operated by certified professionals with relevant experience.",
      image: machines,
      vehicles: [
        {
          name: "JCB Excavator",
          capacity: "Construction",
          features: ["Hydraulic System", "360° Rotation", "Certified Operator"],
          hourlyRate: "₹2,000",
          dailyRate: "₹16,000",
          weeklyRate: "₹100,000"
        },
        {
          name: "Crane 25 Ton",
          capacity: "25 Ton Lift",
          features: ["Telescopic Boom", "Safety Certified", "Expert Operator"],
          hourlyRate: "₹2,500",
          dailyRate: "₹20,000",
          weeklyRate: "₹125,000"
        },
        {
          name: "Dumper Truck",
          capacity: "20 Tons",
          features: ["Hydraulic Dumping", "Heavy Duty", "Robust Construction"],
          hourlyRate: "₹1,000",
          dailyRate: "₹10,000",
          weeklyRate: "₹65,000"
        }
      ]
    }
  ],
  faqs: [
    {
      question: "What documents are required for vehicle rental?",
      answer: "Valid driving license, ID proof (Aadhar/PAN), and address proof are required. For corporate bookings, company registration documents are needed."
    },
    {
      question: "Do you provide drivers with the vehicles?",
      answer: "Yes, we offer both self-drive and chauffeur-driven options. Our drivers are experienced, licensed, and familiar with local routes."
    },
    {
      question: "What is your fuel policy?",
      answer: "Vehicles are provided with full fuel tank and should be returned with the same level. Alternatively, we can handle fuel costs and bill accordingly."
    },
    {
      question: "Do you offer long-term rental discounts?",
      answer: "Yes, we provide attractive discounts for weekly and monthly rentals. Contact us for customized long-term packages."
    },
    {
      question: "What happens in case of breakdown or accident?",
      answer: "We provide 24/7 roadside assistance. All vehicles are comprehensively insured, and replacement vehicles are arranged immediately."
    }
  ]
};