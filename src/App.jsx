import Summary from './component/Summary'
import MenuBar from './component/MenuBar'
import Projects from './component/Projects'
import Skills from './component/Skills'


function App() {

  return (
    <div className='px-301 bg-[#F6CAA8] -z-40'>
      <MenuBar />

      <Summary />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
