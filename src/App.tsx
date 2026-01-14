
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/techstack' element={<TechStack/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blog/:slug' element={<BlogPost/>}/>
     </Routes>
    </>
  )
}

export default App