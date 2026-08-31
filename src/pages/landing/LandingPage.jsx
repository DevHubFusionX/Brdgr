import Hero from '../../components/landing/Hero/Hero'
import HowItWorks from '../../components/landing/HowItWorks/HowItWorks'
import ForClients from '../../components/landing/ForClients/ForClients'
import ForPartners from '../../components/landing/ForPartners/ForPartners'
import CallToAction from '../../components/landing/CallToAction/CallToAction'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ForClients />
      <ForPartners />
      <CallToAction />
    </>
  )
}
