import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the form data to your backend
    console.log({ name, email, message });
    
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!');
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-headline mb-8">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-paragraph text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-main appearance-none border rounded w-full py-2 px-3 text-paragraph leading-tight focus:outline-none focus:ring-2 focus:ring-highlight"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-paragraph text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-main appearance-none border rounded w-full py-2 px-3 text-paragraph leading-tight focus:outline-none focus:ring-2 focus:ring-highlight"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-paragraph text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-sm bg-main appearance-none border rounded w-full py-2 px-3 text-paragraph leading-tight focus:outline-none focus:ring-2 focus:ring-highlight h-32"
              required
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className={`bg-button hover:bg-highlight text-button-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </div>
        </form>
        {submitMessage && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            {submitMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;