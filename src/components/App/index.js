import React, { useState,useEffect } from 'react';
import {getImages} from '../../api/apiService';

import Popup from '../Popup';

import './style.css'


function App() {

    const [images, setImages] = useState(()=>{
      return [];
    })

    const [showPopup, setShowPopup] = useState(()=>{
      return false;
    })

    const [selectedImage, setSelectedImage] = useState(()=>{
      return null;
    })


    async function fetchImages(){
      const imageResult = await getImages();
      setImages(prevImages=> prevImages = [...imageResult]);
    }


    useEffect(() => {
      fetchImages();
    },[])

    const showPopUp = (item)=>{
      setSelectedImage(prevImage=> prevImage = item);
      setShowPopup(prevshowpop => prevshowpop = true);
    }

    const close = ()=>{
      setShowPopup(prevshowpop => prevshowpop = false);
    }
  
  return (
    <div className="masonry">
       {images.map((item)=>{
         return(
           <div className="item">
              <img src={item.images.downsized_medium.url} alt="" onClick={()=>{showPopUp(item)}}/> 
           </div> 
         )

       })}
       {showPopup ? <Popup selectedImage={selectedImage} items={[...images]} close = {close} />:null}
    </div>
  );
}

export default App;
