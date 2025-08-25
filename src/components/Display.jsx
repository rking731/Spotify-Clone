import React, { useEffect }  from 'react'
import DisplatHome from './DisplayHome'
import { Routes, Route} from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayref=useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1): "";
  const bgColor = albumsData[Number(albumId)].bgColor;
  useEffect(()=>{
    if(isAlbum){
      displayref.current.style.background = `linear-gradient( ${bgColor}, #121212)`;
    }
    else{
      displayref.current.style.background = '#121212';
    }
  })
  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplatHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
