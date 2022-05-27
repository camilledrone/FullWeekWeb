import React from 'react';
import LayoutWelcome from '../components/LayoutWelcome'

/* const Home = ({location}) => {
  return (
    <Layout>
      <h1>Home Page </h1>
    </Layout>
  )
}

export default Home; */

const Welcome = ({location}) => {
  return (
    <LayoutWelcome>
      <h1>Welcome Page </h1>
    </LayoutWelcome>
  )
}

export default Welcome;