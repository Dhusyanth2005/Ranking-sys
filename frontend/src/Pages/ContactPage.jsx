import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2, Users, HelpCircle, FileText, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    category: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        category: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@qae.edu.in", "support@qae.edu.in"],
      color: "teal"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 44 1234 5678", "+91 44 8765 4321"],
      color: "teal"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["QAE Headquarters", "123, Education Avenue, Chennai, Tamil Nadu 600001, India"],
      color: "teal"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "teal"
    }
  ];

  const inquiryTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "For Institutions",
      description: "Ranking participation, accreditation, and institutional partnerships",
      email: "institutions@qae.edu.in"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "For Students & Parents",
      description: "General inquiries about rankings and college information",
      email: "students@qae.edu.in"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Technical Support",
      description: "Website issues, data access, and technical assistance",
      email: "support@qae.edu.in"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Media & Press",
      description: "Press releases, media inquiries, and collaboration requests",
      email: "media@qae.edu.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
          <p className="text-teal-100 text-lg">
            Get in touch with us for any queries, support, or partnership opportunities
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

    

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization/Institution
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Inquiry Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  >
                    <option value="">Select a category</option>
                    <option value="institution">Institutional Partnership</option>
                    <option value="ranking">Ranking Inquiry</option>
                    <option value="accreditation">Accreditation Services</option>
                    <option value="student">Student/Parent Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </section>
        {/* Additional Info */}
        <div className="mt-12 bg-teal-50 rounded-lg border border-teal-200 p-6">
          <h3 className="font-semibold text-slate-800 mb-3">Response Time</h3>
          <p className="text-slate-600 mb-4">
            We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our main office line during business hours.
          </p>
          <p className="text-slate-600">
            <strong>Note:</strong> For institutional ranking applications, please allow 3-5 business days for our team to review your submission and respond with next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;