
import './App.css'
import Ads from './component/Ads'
import Footer from './component/Footer'

import MatchInfo from './component/MatchInfo'
import Navbar from './component/Navbar'
import QuickLinks from './component/QuickLinks'
import ScoreCard from './component/ScoreCard'
import TopStories from './component/TopStories'
import TopTeam from './component/TopTeam'
import Video from './component/Video'

function App() {

  return (
   <>
      <Navbar />
        <div className='content'>
          <ScoreCard />
          <QuickLinks/>
          <TopStories />
          <Video />
          <MatchInfo />
          <Ads />
          <TopTeam />
        </div>
      <Footer />
   </>
  )
}

export default App
