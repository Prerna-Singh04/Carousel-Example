import React, { useEffect, useState } from 'react';
import './index.css';


const HotstarCarousel = () => {

    const [images, setImages] = useState(['img1.webp','img2.webp','img3.webp','img4.webp','img5.webp','img6.webp','img7.webp','img8.webp','img9.webp','img10.webp','img11.webp','img12.webp','img13.webp','img14.webp','img15.webp','img16.webp','img17.webp','img18.webp','img19.webp','img20.webp','img21.webp','img22.webp'])
    const imgWidth = 320;

    const [checkNext,setCheckNext] = useState(true);
    const [checkPrev,setCheckPrev] = useState(false);

    const [displayImage,setDisplayImages] = useState([])

    useEffect(()=>{
        let showImage = []
        let x= Math.round(window.innerWidth/imgWidth)

        for(let i=0; i< images.length; i++){

            if(i===x){
                break;
            }else{
                showImage.push(images[i])
            }
        }
        setDisplayImages(showImage)

    },[])

    const handleNext = () => {
        
        let lastelem = displayImage[displayImage.length-1]
        let result = images.indexOf(lastelem);
        const currentIndex =  Math.round(window.innerWidth/imgWidth);
        let showImage = images.slice(result+1,(currentIndex+result+1))
        if(showImage[showImage.length-1] === images[images.length-1]) setCheckNext(false) 
        else setCheckPrev(true)
        setDisplayImages(showImage)
    }

    const handlePrev = () => {
        setCheckNext(true);
        let firstIndex = displayImage[0];
        let result = images.indexOf(firstIndex);
        const currentIndex =  Math.round(window.innerWidth/imgWidth);
        let showImage = images.slice((result-currentIndex),result)
        if(showImage[0] === images[0]) setCheckPrev(false)
        setDisplayImages(showImage)
    }

  return (
    <div>
        <h2 className='carousel_text'>Carousel</h2>
        <div className='hotstar_image_elem'>
            <div className='carousel_image_section'>
            {checkPrev?<button className='arrow_btn prev_btn' onClick={handlePrev}>Prev</button>:null}
                {displayImage.map((elem,index) => {
                    return(
                        <img key={index} src={`images/${elem}`} width={`${imgWidth}px`} alt={`Carousel img ${elem}`} className='carousel_image'/>
                    )
                })}
            {checkNext?<button className='arrow_btn next_btn' onClick={handleNext}>Next</button>: null}
            </div>
        </div>
    </div>
  )
}

export default HotstarCarousel;