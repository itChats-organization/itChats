import Home from '../pages/Home'
import Chats from '../pages/Chats'
import About from '../pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 const MainContent = () => {
  return (

    <div>
      
    <Routes> 
      
      <Route path='/' element={<Home/>}/>
      
      <Route path="/Chats" element={<Chats />} />
       <Route path='/About' element={<About/>}/>

    </Routes>
        
    </div>
  )
}
export default MainContent;