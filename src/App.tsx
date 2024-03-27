import './App.css'

import {MainContent} from "./components/mainContent"
import {SideBar} from "./components/sideBar"

const App = () => (
  <div className='flex-row'>
    <SideBar/>
    <MainContent/>
  </div>
)

export default App
