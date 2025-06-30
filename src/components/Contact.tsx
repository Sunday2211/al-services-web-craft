
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will contact you within 24 hours.",
      });
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Let's Bring Your Vision to Life
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to transform your space or give your car the premium treatment it deserves? 
            Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-yellow-400 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:9547905115" className="text-yellow-400 hover:text-yellow-300 text-lg">
                    (954) 790-5115
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">al.services.inc@example.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-300">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-gray-300">Fort Lauderdale, Hollywood, Plantation,</p>
                  <p className="text-gray-300">Coral Springs & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://instagram.com/al.services.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 hover:bg-yellow-300 transition-all duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/al.services.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 hover:bg-yellow-300 transition-all duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="tel:9547905115"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 hover:bg-yellow-300 transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Full Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Phone Number</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Service Requested</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white focus:border-yellow-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="handyman">General Handyman</SelectItem>
                    <SelectItem value="woodwork">Custom Woodwork</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="auto-detailing">Auto Detailing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Project Description</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
