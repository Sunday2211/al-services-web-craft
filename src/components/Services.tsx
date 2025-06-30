
import { Home, Car, Wrench, Paintbrush, Lightbulb, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const homeServices = [
    "General Handyman Services",
    "Custom Woodwork", 
    "Interior & Exterior Painting",
    "Ceiling Light Installation",
    "TV and Shelf Installation",
    "Window & Pressure Cleaning",
    "Cement Work",
    "Custom Closet Systems",
    "LED Lighting Installations"
  ];

  const autoServices = [
    "Full Car Detail Cleaning",
    "Exterior Deep Cleaning", 
    "Interior Shampoo Cleaning",
    "Deep Shampoo Seat Cleaning",
    "Exterior Waxing",
    "Professional-Grade Equipment",
    "High-Performance Results", 
    "Showroom-Quality Finish"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From home improvements to auto detailing, we deliver exceptional results with every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Home className="h-10 w-10 text-black" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Home & Property Services
              </CardTitle>
              <CardDescription className="text-gray-600">
                Complete handyman solutions for your home
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {homeServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-10 w-10 text-black" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Auto Detailing Services
              </CardTitle>
              <CardDescription className="text-gray-600">
                Professional car care for pristine results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {autoServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Wrench, title: "Expert Craftsmanship", desc: "Skilled professionals with years of experience" },
            { icon: Paintbrush, title: "Attention to Detail", desc: "Meticulous work on every project" },
            { icon: Lightbulb, title: "Innovative Solutions", desc: "Creative approaches to complex challenges" },
            { icon: Droplets, title: "Quality Materials", desc: "Premium products for lasting results" }
          ].map((feature, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
