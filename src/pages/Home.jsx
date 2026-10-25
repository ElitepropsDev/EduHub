import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import ContactUs from '../components/Home/ContactUs'
import Mission from '../components/Home/Mission'
import Ecosystem from '../components/Home/Ecosystem'
import TheGap from '../components/Home/TheGap'
import HowCareerXPWorks from '../components/Home/HowCareerXPWorks'
import Projects from '../components/Home/Projects'
import WhyCareerXP from '../components/Home/WhyCareerXP'
import Partnerships from '../components/Home/Partnerships'

const Home = () => {
  return (
    <>
      <Hero />
      <Ecosystem/>
      <Mission/>
      <TheGap/>
      <HowCareerXPWorks/>
      <Services />
      <Projects />
       <WhyCareerXP />
       <Partnerships />
      <ContactUs />
    </>
  )
}

export default Home
