import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmark] = useState([]);

  const HandleBookmarks = ()=>{
    console.log('add bookmarks ')
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex items-center'>
        <Blogs HandleBookmarks={HandleBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
