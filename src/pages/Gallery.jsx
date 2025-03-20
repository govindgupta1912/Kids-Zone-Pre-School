import React, { useState } from 'react'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'classroom', label: 'Classroom Activities' },
    { id: 'events', label: 'Events & Celebrations' },
    { id: 'outdoor', label: 'Outdoor Activities' },
    { id: 'art', label: 'Art & Craft' }
  ]
  
  const galleryImages = [
    {
      id: 1,
      category: 'classroom',
      title: 'Learning Numbers',
      description: 'Children engaged in a fun counting activity',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80'
    },
    {
      id: 2,
      category: 'classroom',
      title: 'Story Time',
      description: 'Teacher reading a storybook to attentive children',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 3,
      category: 'events',
      title: 'Annual Day Celebration',
      description: 'Children performing on stage during our annual day function',
      image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      id: 4,
      category: 'events',
      title: 'Independence Day',
      description: 'Flag hoisting ceremony with students and teachers',
      image: 'https://images.unsplash.com/photo-1564429097439-e400382dc893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 5,
      category: 'outdoor',
      title: 'Play Time',
      description: 'Children enjoying games in our outdoor playground',
      image: 'https://images.unsplash.com/photo-1597218868981-1b68e23e5321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 6,
      category: 'outdoor',
      title: 'Nature Walk',
      description: 'Exploring nature and learning about plants and trees',
      image: 'https://images.unsplash.com/photo-1536745287225-21d689278d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80'
    },
    {
      id: 7,
      category: 'art',
      title: 'Painting Session',
      description: 'Children expressing creativity through colors',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      category: 'art',
      title: 'Clay Modeling',
      description: 'Developing fine motor skills through clay modeling',
      image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    },
    {
      id: 9,
      category: 'classroom',
      title: 'Group Activity',
      description: 'Learning teamwork through collaborative activities',
      image: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 10,
      category: 'events',
      title: 'Diwali Celebration',
      description: 'Celebrating festivals with traditional activities',
      image: 'https://images.unsplash.com/photo-1576483485305-617b8f0a74e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 11,
      category: 'outdoor',
      title: 'Sports Day',
      description: 'Annual sports day activities and competitions',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1307&q=80'
    },
    {
      id: 12,
      category: 'art',
      title: 'Craft Exhibition',
      description: 'Showcasing children\'s artwork and crafts',
      image: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ]
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)
  
  // Function to handle modal for image viewing (in a real implementation)
  const handleImageClick = (image) => {
    console.log('Image clicked:', image)
    // Open modal with full size image
  }
  
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Gallery</h1>
          <p className="text-center text-lg mt-2">A Glimpse into Kids Zone</p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            Explore our gallery to see the vibrant life at Kids Zone Pre-School. From classroom activities 
            to special events, our gallery captures the joy and creativity of our students.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {categories.map(category => (
              <button 
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => handleImageClick(image)}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                  <p className="text-sm text-primary mt-2 uppercase">{categories.find(c => c.id === image.category).label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Watch Us in Action</h2>
          
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
              <h3 className="text-xl font-bold mb-2">Annual Day Celebrations</h3>
              <p className="text-gray-700">Watch highlights from our most recent annual day celebration featuring performances by our talented children.</p>
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
              <h3 className="text-xl font-bold mb-2">A Day at Kids Zone</h3>
              <p className="text-gray-700">Experience a typical day at Kids Zone Pre-School, from morning assembly to engaging classroom activities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of Our Journey?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join the Kids Zone family and give your child the opportunity to create their own beautiful memories.
            Schedule a visit to our campus today!
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

export default Gallery 