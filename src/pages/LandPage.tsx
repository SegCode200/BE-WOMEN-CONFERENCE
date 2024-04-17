import AboutComponents from "./LandingPage/AboutComponents"
import Events from "./LandingPage/Events"
import HeroPage from "./LandingPage/HeroPage"
import HowDoesBEWorks from "./LandingPage/HowDoesBEWorks"
import MeetPastor from "./LandingPage/MeetPastor"
import PhotoGallery from "./LandingPage/PhotoGallery"
import Quote from "./LandingPage/Quote"
import Sermon from "./LandingPage/Sermon"
import TheAboutPage from "./LandingPage/TheAboutPage"



const LandPage = () => {
  return (
    <div>
      <HeroPage/>
      <TheAboutPage/>
      <HowDoesBEWorks/>
      <AboutComponents/>
      <Sermon/>
      <PhotoGallery/>
      <MeetPastor/>
      <Quote/>
      <Events/>
    </div>
  )
}

export default LandPage
