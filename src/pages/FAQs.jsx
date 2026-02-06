import React, { useEffect } from 'react'
import PageWrapper from './PageWrapper'

const FAQs = () => {

    useEffect(() => {
      document.title = "FAQs - rana.net.in";
    }, []);

  return (
    <PageWrapper heading="Common Questions">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima!</p>
    </PageWrapper>
  )
}

export default FAQs