import React from 'react';
import Hero from '../components/Hero.js';
import ContinueLearning from '../components/ContinueLearning';
import BrowseCategories from '../components/BrowseCategories';
import FeaturedCourses from '../components/FeaturedCourses';
import Feature from '../components/Feature';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';



export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero />
      <ContinueLearning />
      <BrowseCategories />
      <FeaturedCourses />
      <Feature />
    </main>
    <Footer/>
    </>
  );
}
