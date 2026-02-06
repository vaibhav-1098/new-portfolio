import React, { useEffect } from 'react'
import PageWrapper from './PageWrapper'

const Pricing = () => {

    useEffect(() => {
      document.title = "Pricing Models - rana.net.in";
    }, []);

  return (
    <PageWrapper heading="View our Plans">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima!</p>
    </PageWrapper>
  )
}

export default Pricing