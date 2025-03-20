import React from 'react'

const Programs = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Our Programs</h1>
        </div>
      </section>
      
      {/* Main Programs */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Playgroup",
                ageRange: "1.5 to 2.5 years",
                description: "For our youngest learners, we offer a warm and welcoming environment where children can take their first steps into the world of learning through play and exploration.",
                features: [
                  "Sensory development activities",
                  "Language building through stories and rhymes",
                  "Fine motor skill development",
                  "Social interaction in a supervised setting",
                  "Safe and engaging play areas"
                ],
                color: "bg-accent/10",
                textColor: "text-accent",
                image: "https://images.unsplash.com/photo-1526673945530-87c6409cd100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              },
              {
                title: "Nursery",
                ageRange: "2.5 to 3.5 years",
                description: "Our nursery program focuses on developing foundational skills in language, math, and social interaction through engaging activities and hands-on learning.",
                features: [
                  "Introduction to alphabets and numbers",
                  "Creative expression through art and music",
                  "Structured play-based learning",
                  "Development of social skills and sharing",
                  "Physical activities to build gross motor skills"
                ],
                color: "bg-primary/10",
                textColor: "text-primary",
                image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Kindergarten",
                ageRange: "3.5 to 5.5 years",
                description: "Designed to prepare children for formal schooling, our kindergarten program emphasizes critical thinking, problem-solving, and creativity.",
                features: [
                  "Pre-reading and writing activities",
                  "Basic mathematical concepts",
                  "Science and exploration",
                  "Speech and drama activities",
                  "Self-help skills and independence"
                ],
                color: "bg-secondary/10",
                textColor: "text-secondary",
                image: "https://images.unsplash.com/photo-1564429097439-e400382dc893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full ${program.color} ${program.textColor} text-sm font-medium mb-2`}>
                    {program.ageRange}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{program.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {program.description}
                  </p>
                  <h3 className="font-bold text-lg mb-2">Program Features:</h3>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Music and Movement",
                description: "Our music and movement program encourages children to express themselves through rhythm, dance, and song. Children learn to recognize patterns, develop coordination, and build confidence through performances.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                )
              },
              {
                title: "Art and Craft",
                description: "Through our art and craft program, children explore various mediums and techniques to create beautiful artwork. This fosters creativity, improves fine motor skills, and helps children express their thoughts and emotions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                title: "Storytelling and Drama",
                description: "Our storytelling and drama program helps children develop language skills, imagination, and empathy. Through stories and role-play, children learn about different cultures, emotions, and situations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                )
              },
              {
                title: "Outdoor Activities",
                description: "Our outdoor program provides children with opportunities to explore nature, develop physical skills, and learn about the environment. Activities include gardening, nature walks, and outdoor games that promote teamwork and physical fitness.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((program, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-md">
                <div className="md:mt-1">{program.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Perfect Program for Your Child</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our diverse range of programs ensures that every child receives the attention and education they need to thrive.
            Contact us today to learn more about our programs or to schedule a visit.
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

export default Programs 