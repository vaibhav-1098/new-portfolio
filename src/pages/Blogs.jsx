import React, { useEffect } from 'react'
import PageWrapper from './PageWrapper'

const Blogs = () => {

  useEffect(() => {
    document.title = "Read our Blogs - rana.net.in";
  }, []);

  return (
    <PageWrapper heading="Read our Blogs">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima!</p>
    </PageWrapper>
  )
}

export default Blogs