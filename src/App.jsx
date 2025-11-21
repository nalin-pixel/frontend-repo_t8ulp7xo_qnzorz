import HeroAndHeritage from './components/HeroAndHeritage'
import CollectionsWorkshops from './components/CollectionsWorkshops'
import StoriesAndOrder from './components/StoriesAndOrder'
import MapTeamStatsContactFooter from './components/MapTeamStatsContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#1a1612]">
      {/* Subtle woven pattern */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage:"radial-gradient(circle at 10% 10%, #d4af37 0 2px, transparent 3px), radial-gradient(circle at 90% 30%, #d4af37 0 1px, transparent 2px)", backgroundSize:'60px 60px, 80px 80px'}}/>

      <HeroAndHeritage />
      <CollectionsWorkshops />
      <StoriesAndOrder />
      <MapTeamStatsContactFooter />
    </div>
  )
}

export default App