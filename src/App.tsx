import './App.css'

import {MainContent} from "./components/mainContent"
import {SideBar} from "./components/sideBar"
import { SidebarProvider } from './utils/useSidebar'

const App = () => (
  <div className='flex-row'>
    <SidebarProvider>
      <SideBar/>
      <MainContent/>
    </SidebarProvider>
  </div>
)

export default App
