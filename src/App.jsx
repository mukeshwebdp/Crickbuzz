
import './App.css'
import Footer from './component/footer'
import Navbar from './component/Navbar'
import QuickLinks from './component/QuickLinks'
import ScoreCard from './component/ScoreCard'
import TopStories from './component/TopStories'
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
        </div>
      <Footer />
   </>
  )
}

export default App
