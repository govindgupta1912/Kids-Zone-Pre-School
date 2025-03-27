import React from 'react'
import { Link } from 'react-router-dom'

const Admissions = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Admissions</h1>
        </div>
      </section>
      
      {/* Join Kids Zone Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Kids Zone Family</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are delighted that you are considering Kids Zone Pre-School for your child's early education. 
              Our admission process is simple and transparent, designed to help you make the best decision for your child's future.
            </p>
            
            <div className="bg-primary/5 p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-xl font-bold mb-4 text-primary">Admissions are now open!</h3>
              <p className="mb-4">We are currently accepting applications for the upcoming academic year.</p>
              <Link
               to={'/Kids-Zone-Pre-School/contact'}
              
              className="btn btn-primary"
                onClick={() => setCurrentPage('contact')}
              >
                Contact Us</Link>
            </div>
          </div>
          
          {/* Admission Process */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-10">Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Visit our campus",
                      description: "Schedule a visit to our campus to learn more about our programs, meet our staff, and see our facilities firsthand."
                    },
                    {
                      step: 2,
                      title: "Fill out the admission form",
                      description: "Complete our comprehensive admission form, providing details about your child and your family."
                    },
                    {
                      step: 3,
                      title: "Submit required documents",
                      description: "Submit necessary documents including birth certificate, photographs, and immunization records."
                    },
                    {
                      step: 4,
                      title: "Complete the enrollment process",
                      description: "Pay the admission fee and complete any remaining formalities to secure your child's place at Kids Zone."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Parent filling out admission form" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Age Criteria Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Age Criteria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                program: "Playgroup",
                age: "1.5 to 2.5 years",
                color: "bg-accent/10",
                textColor: "text-accent",
                borderColor: "border-accent"
              },
              {
                program: "Nursery",
                age: "2.5 to 3.5 years",
                color: "bg-primary/10",
                textColor: "text-primary",
                borderColor: "border-primary"
              },
              {
                program: "Kindergarten",
                age: "3.5 to 5.5 years",
                color: "bg-secondary/10",
                textColor: "text-secondary",
                borderColor: "border-secondary"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${item.color} p-6 rounded-lg border-l-4 ${item.borderColor} text-center`}
              >
                <h3 className={`text-xl font-bold mb-2 ${item.textColor}`}>{item.program}</h3>
                <p className="text-gray-700 font-medium">{item.age}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is the admission fee?",
                answer: "Our admission fee varies by program. Please contact our office for the most current fee structure."
              },
              {
                question: "Do you provide transportation facilities?",
                answer: "Yes, we offer safe and reliable transportation services for students, covering most areas of Gurugram."
              },
              {
                question: "What is the teacher-to-student ratio?",
                answer: "We maintain a low teacher-to-student ratio (1:10 for Playgroup, 1:15 for Nursery and Kindergarten) to ensure personalized attention."
              },
              {
                question: "What is your approach to discipline?",
                answer: "We follow a positive reinforcement approach, focusing on guiding children toward good behavior rather than punishing mistakes."
              },
              {
                question: "Do you accommodate children with special needs?",
                answer: "Yes, we strive to be inclusive and accommodate children with various needs. Please contact us to discuss your child's specific requirements."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact for Admissions */}
      <section className="py-16 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin the Admissions Process?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a visit or for any queries regarding admissions. 
            Our friendly staff is here to assist you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91-8800177729, +91-9910077019</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@kidszonepreschool.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions 