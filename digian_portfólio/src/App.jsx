import './styles/main.sass'
import './components/MainContent'
import './components/Sidebar'
import './styles/components/app.sass'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {

  return (

    <div id='portfolio' className='page-wrapper'>
      <h1 className='text-gradient'>Lucas Digian</h1>
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
    </div>


  )
}

export default App
