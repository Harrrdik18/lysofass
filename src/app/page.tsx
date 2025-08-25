import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VehicleSection from '../components/VehicleSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const vehicleSections = [
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "suv"
    },
    {
      vehicleType: "Commercial vehicles",
      description: "Adding a nonwoven engineering for heavy-duty vehicles",
      modelType: "truck"
    },
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "engine"
    },
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "interior"
    },
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "seat"
    },
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "chassis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        {vehicleSections.map((section, index) => (
          <VehicleSection
            key={index}
            vehicleType={section.vehicleType}
            description={section.description}
            modelType={section.modelType}
          />
        ))}
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
