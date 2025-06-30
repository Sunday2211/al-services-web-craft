
import { Award, Clock, Handshake, Smile } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            About AL Services Inc.
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Built on Craftsmanship. Powered by Integrity.
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                AL Services Inc. was established with a simple goal: deliver a multi-specialty service platform 
                that combines the best of home improvement and car care under one roof.
              </p>
              <p>
                We are a family-operated, locally driven business that believes in the power of community, 
                detail-oriented service, and reliable partnerships. Our founder and technicians bring years 
                of experience and a problem-solving mindset to every job site.
              </p>
              <p>
                We proudly serve <span className="font-semibold text-yellow-600">Fort Lauderdale, Hollywood, 
                Plantation, Coral Springs</span>, and surrounding areas in South Florida.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-full h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-black">
                <h4 className="text-2xl font-bold mb-2">AL Services Team</h4>
                <p className="text-lg">Your Trusted Local Experts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Award,
              title: "Quality Workmanship",
              desc: "Excellence in every project we undertake"
            },
            {
              icon: Clock, 
              title: "Timely Service",
              desc: "Respect for your time and schedule"
            },
            {
              icon: Handshake,
              title: "Honest Communication", 
              desc: "Clear, transparent pricing and updates"
            },
            {
              icon: Smile,
              title: "Customer Satisfaction",
              desc: "Your happiness is our success"
            }
          ].map((value, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-all duration-300 group-hover:scale-110">
                <value.icon className="h-10 w-10 text-yellow-600 group-hover:text-black" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
