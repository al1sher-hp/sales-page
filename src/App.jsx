import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import DemoCTA from './components/DemoCTA'
import Pricing from './components/Pricing'
import WhyMe from './components/WhyMe'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <DemoCTA />
        <Pricing />
        <WhyMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
