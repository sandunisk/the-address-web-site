import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/projects'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/footer'

export default function MyApp() {
  return (
    <>
      <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}