import React from 'react';
import { Router, Link } from "@reach/router"
import Layout from '../components/Layout'
import PersonalInfos from '../components/PersonalInfos';

const Profil = ({location}) => {
  return (
    <Layout>
      <h1>Profil Page </h1>
      <nav>
        <Link to='/profil/info'>Info</Link>
      </nav>
      <Router basepath="/profil">
        <PersonalInfos path="/info" />
      </Router>
    </Layout>
  )
}

export default Profil;