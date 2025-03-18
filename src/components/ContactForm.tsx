
import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { toast } from "sonner";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'default'
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Thanks for reaching out! We'll get back to you soon.");
      
      // Reset form after showing success state for a moment
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: 'default'
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-gray-600">Fill out the form below and our team will get back to you shortly.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
            placeholder="Your Company"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
            placeholder="+1 (123) 456-7890"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-gray-700">
            Service You're Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
          >
            <option value="default" disabled>Select a service</option>
            <option value="ai-ml">AI & Machine Learning</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="fintech">FinTech Solutions</option>
            <option value="custom-dev">Custom Development</option>
          </select>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
            placeholder="Tell us about your project or requirements..."
          />
        </div>
      </div>
      
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading || success}
          className={`w-full py-3 px-4 flex items-center justify-center rounded-md text-white font-medium transition-all duration-300 ${
            success 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-rhino-blue hover:bg-rhino-darkblue'
          }`}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          ) : success ? (
            <Check className="h-5 w-5 mr-2" />
          ) : (
            <Send className="h-5 w-5 mr-2" />
          )}
          {loading ? 'Sending...' : success ? 'Message Sent' : 'Send Message'}
        </button>
      </div>
      
      <p className="text-gray-500 text-sm mt-4 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-rhino-blue hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </motion.form>
  );
};

export default ContactForm;
