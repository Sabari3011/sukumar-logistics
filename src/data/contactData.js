export const contactData = {
  title: "Book Your Vehicle",
  subtitle: "Ready to get moving? Fill out the form below or contact us directly.",
  formFields: {
    title: "Vehicle Booking Form",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "vehicleType", label: "Vehicle Type", type: "select", required: true, options: [
        "Heavy Duty Trucks",
        "Mini Trucks & Vans", 
        "Corporate Cars",
        "Heavy Machinery"
      ]},
      { name: "pickupDate", label: "Pickup Date", type: "date", required: true },
      { name: "pickupTime", label: "Pickup Time", type: "time", required: true },
      { name: "dropoffDate", label: "Drop-off Date", type: "date", required: true },
      { name: "dropoffTime", label: "Drop-off Time", type: "time", required: true },
      { name: "pickupLocation", label: "Pickup Location", type: "text", required: true },
      { name: "dropoffLocation", label: "Drop-off Location", type: "text", required: false },
      { name: "message", label: "Additional Requirements", type: "textarea", required: false }
    ]
  },
  contactInfo: {
    title: "Contact Information",
    details: [
      {
        icon: "Phone",
        title: "Phone",
        value: "+91 97517 40507",
        action: "tel:+919751740507"
      },
      {
        icon: "Mail",
        title: "Email",
        value: "info@sukumarlogistics.com",
        action: "mailto:info@sukumarlogistics.com"
      },
      {
        icon: "MessageCircle",
        title: "WhatsApp",
        value: "+91 97517 40507",
        action: "https://wa.me/919751740507"
      },
      {
        icon: "MapPin",
        title: "Address",
        value: "123 Industrial Area, Sector 15, New Delhi - 110001",
        action: "https://maps.google.com"
      }
    ]
  },
  businessHours: {
    title: "Business Hours",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
      { day: "Saturday", time: "9:00 AM - 6:00 PM" },
      { day: "Sunday", time: "10:00 AM - 4:00 PM" },
      { day: "Emergency Service", time: "24/7 Available" }
    ]
  },
  callToAction: {
    title: "Need Help Choosing a Vehicle?",
    subtitle: "Our experts are here to help you find the perfect vehicle for your needs.",
    buttonText: "Call Now",
    phone: "+91 97517 40507"
  }
};