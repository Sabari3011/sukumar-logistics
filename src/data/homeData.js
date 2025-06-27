import heroBg from '../../assets/heroLogistics.jpg';
import deliveryVan from '../../assets/deliveryVan.jpg';
import truck from '../../assets/truck.jpg';
import machines from '../../assets/machines.jpg';


export const homeData = {
  hero: {
    title: "Sukumar Logistics",
    subtitle: "All Types of Vehicles for Rent – Anytime, Anywhere",
    description: "Professional logistics solutions with a comprehensive fleet of vehicles for all your transportation needs.",
    backgroundImage: heroBg,
    ctaButtons: [
      { text: "Book Now", link: "/contact", primary: true },
      // { text: "View Services", link: "/services", primary: false }
    ]
  },
  about: {
    title: "About Sukumar Logistics",
    content: "With years of experience in the logistics industry, we provide reliable, efficient, and cost-effective vehicle rental services. Our commitment to quality and customer satisfaction sets us apart.",
    highlights: ["15+ Years Experience", "500+ Happy Clients", "24/7 Support"]
  },
  services: {
    title: "Our Key Services",
    items: [
      {
        icon: "Truck",
        title: "Heavy Duty Trucks",
        description: "Perfect for large cargo and long-distance transportation",
        image: truck
      },
      {
        icon: "Package",
        title: "Delivery Vans",
        description: "Ideal for local deliveries and medium-sized cargo",
        image: deliveryVan
      },
      {
        icon: "Car",
        title: "Corporate Cars",
        description: "Professional transportation for business needs",
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
      },
      {
        icon: "Construction",
        title: "Heavy Machinery",
        description: "Specialized vehicles for construction and industrial use",
        image: machines
      }
    ]
  },
  whyChooseUs: {
    title: "Why Choose Sukumar Logistics",
    reasons: [
      {
        icon: "DollarSign",
        title: "Affordable Rates",
        description: "Competitive pricing with transparent billing"
      },
      {
        icon: "Shield",
        title: "Verified Drivers",
        description: "Professional, licensed, and experienced drivers"
      },
      {
        icon: "Clock",
        title: "24/7 Support",
        description: "Round-the-clock customer service and assistance"
      },
      {
        icon: "Calendar",
        title: "Flexible Terms",
        description: "Hourly, daily, weekly, and monthly rental options"
      }
    ]
  },
  testimonials: {
    title: "What Our Clients Say",
    reviews: [
      {
        name: "Rajesh Kumar",
        company: "ABC Manufacturing",
        rating: 5,
        text: "Excellent service and reliable vehicles. Sukumar Logistics has been our go-to logistics partner for over 3 years."
      },
      {
        name: "Priya Sharma",
        company: "Delhi Traders",
        rating: 5,
        text: "Professional drivers and well-maintained fleet. Highly recommend for any logistics needs."
      },
      {
        name: "Mohammad Ali",
        company: "City Construction",
        rating: 5,
        text: "Timely service and competitive rates. Their heavy machinery rental saved our project timeline."
      }
    ]
  },
  contact: {
    phone: "+91 97517 40507",
    email: "info@sukumarlogistics.com",
    whatsapp: "+91 97517 40507",
    address: "123 Industrial Area, Sector 15, New Delhi - 110001"
  }
};