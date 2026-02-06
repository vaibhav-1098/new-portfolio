import React, { useEffect } from 'react'
import PageWrapper from './PageWrapper'

const Contact = () => {

    useEffect(() => {
      document.title = "Let's Connect - rana.net.in";
    }, []);

  return (
    <PageWrapper heading="Let's Connect">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima!</p>
    </PageWrapper>
  )
}

export default Contact