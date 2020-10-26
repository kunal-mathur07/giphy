import React,{useState,useEffect} from 'react';
import './popup.css';

function Popup(props){
    const {selectedImage, items} = props
    const [currentIdx, setCurrentIdx] = useState(()=>{
       return getIndex()
    })


    function getIndex(){
        let idx =  items.findIndex((item)=>{return item.id === selectedImage.id});
        return idx
    }

    useEffect(()=>{
        setCurrentIdx(prevIdx => prevIdx = getIndex())   
    },[selectedImage])


    const prev = (e)=>{
       e.stopPropagation();

       setCurrentIdx(prevIdx => {
            console.log(prevIdx)
            if(prevIdx === 0){
                prevIdx = items.length - 1;
            } else {
                prevIdx = prevIdx - 1;
            }
            return prevIdx;
        });
    }

    const next = (e)=>{
        e.stopPropagation();
        setCurrentIdx(prevIdx => {
            if(prevIdx === items.length - 1) {
            prevIdx = 0;
            } else {
                prevIdx = prevIdx + 1;
            }
            return prevIdx;
        });
    }
    
    const closeClick = (e)=>{
        e.stopPropagation();
        props.close();
    }

    return (
        <div className="popupContainer" onClick={()=>props.close()}>          
            <div className="content">
                <div className="header">
                    <button className="close" onClick={(e)=>closeClick(e)}>X</button>
                </div>
                <div className="popupBody">
                    <button className="actionButton" onClick={(e)=>{prev(e)}}>Prev</button>
                    <div>
                        <img src={items[currentIdx].images.downsized_medium.url} alt=""/>
                    </div>
                    <button className="actionButton" onClick={(e)=>{next(e)}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;