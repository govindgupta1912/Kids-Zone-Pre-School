import React from 'react'

const Testimonials = ({ setCurrentPage }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Parent of a Nursery student',
      content: 'Kids Zone has been a wonderful experience for our child. The teachers are caring, and the curriculum is engaging. Our son has shown tremendous improvement in his communication skills and confidence. We love how the school keeps parents involved through regular updates and activities. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      role: 'Parent of a Kindergarten student',
      content: 'The facilities are excellent, and the focus on holistic development is truly commendable. My daughter loves going to school every day, which speaks volumes about the positive environment Kids Zone has created. The staff is professional, friendly, and genuinely care about each child\'s progress.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 3,
      name: 'Anita Gupta',
      role: 'Parent of a Playgroup student',
      content: 'As first-time parents, we were anxious about sending our toddler to school, but Kids Zone made the transition smooth and comfortable. The gentle approach to learning, clean environment, and friendly teachers have made our child love the school. We\'ve seen significant development in social skills and independence.',
      image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      id: 4,
      name: 'Vivek Singh',
      role: 'Parent of a Kindergarten student',
      content: 'I am impressed by the balance between academics and extracurricular activities at Kids Zone. My child has developed not just academically but also in art, music, and physical activities. The teachers are well-qualified and know how to bring out the best in each child. We couldn\'t have chosen a better pre-school.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 5,
      name: 'Neha Kapoor',
      role: 'Parent of a Nursery student',
      content: 'The curriculum at Kids Zone is well-planned and age-appropriate. I particularly appreciate their focus on building character and values alongside academic skills. The school\'s communication with parents is excellent, and they are always open to feedback and suggestions.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 6,
      name: 'Sanjay Patel',
      role: 'Parent of a Playgroup and Kindergarten students',
      content: 'With two kids at Kids Zone, I can confidently say this school understands children at different developmental stages. They provide the right balance of nurturing and independence. The safety measures are top-notch, and as a parent, knowing my children are in safe hands gives me great peace of mind.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ]
  
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Testimonials</h1>
          <p className="text-center text-lg mt-2">What Parents Say About Us</p>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            At Kids Zone Pre-School, we value the feedback of our parents. Here's what some of them have to say about their experience with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="h-8 w-8 text-gray-200 absolute top-0 left-0 -mt-3 -ml-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 relative z-10 pl-4">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-4 bg-gray-200">
                {/* Placeholder for video embed - in a real app, this would be an iframe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">The Sharma Family</h3>
              <p className="text-gray-700">Hear how Kids Zone helped their shy daughter become a confident learner over the course of a year.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-4 bg-gray-200">
                {/* Placeholder for video embed - in a real app, this would be an iframe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">The Mehta Family</h3>
              <p className="text-gray-700">Listen to why they chose Kids Zone for their second child after their positive experience with their first.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parent Success Stories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">From Shy to Confident Speaker</h3>
              <p className="text-gray-700 mb-6">
                "When Aarav joined Kids Zone, he was extremely shy and would barely speak to anyone outside our family. 
                The teachers at Kids Zone worked patiently with him, creating a safe space where he could express himself.
                Within six months, we noticed a remarkable change. He started initiating conversations, participating in 
                class activities, and even volunteered for the annual day performance! Kids Zone's nurturing approach and 
                focus on communication skills made all the difference."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Meera Joshi" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Meera Joshi</h4>
                  <p className="text-gray-600 text-sm">Mother of Aarav, Kindergarten</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Early Reading Success</h3>
              <p className="text-gray-700 mb-6">
                "My daughter Zara showed an early interest in books, but we weren't sure how to nurture this beyond just 
                reading to her. Kids Zone's literacy program amazed us with its age-appropriate approach to developing reading skills.
                The teachers recognized her interest and provided additional resources and activities. By the end of Kindergarten,
                Zara was reading simple books on her own! The school's individualized attention to each child's interests and abilities
                is what sets Kids Zone apart."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                  alt="Ahmed Khan" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Ahmed Khan</h4>
                  <p className="text-gray-600 text-sm">Father of Zara, Kindergarten Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community of Happy Families</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Experience the Kids Zone difference for yourself. Schedule a visit to our campus and see why 
            so many parents trust us with their children's early education.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentPage('contact')}
          >
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  )
}

export default Testimonials 