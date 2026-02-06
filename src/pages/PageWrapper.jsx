import React from 'react'

// We destructure 'children' for the content and 'heading' as a prop
const PageWrapper = ({ children, heading }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <h1 className='animated-header text-center text-white text-3xl mt-24 font-architects-daughter'>
          <span>{heading}</span>
        </h1>
        
        {/* This is where your unique page content will render */}
        <div className="container mx-auto px-4 py-10">
          {children}
        </div>
      </main>
    </div>
  )
}

export default PageWrapper