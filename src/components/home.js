import Carousel from 'better-react-carousel';
import React, {useState, useCallback} from "react";
import {image} from "./data";
import  Show  from "./show";
import  "../home.css";


const Home = () => {
    const [index, setIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(image[0].ImageUrl);
    const [name, setName] = useState(image[0].Name);
    const [details, setDetails] = useState(image[0].ShortDesc)


const openImageViewer = useCallback((index) => {
    setIndex(index);
    setCurrentImage(image[index].ImageUrl);
    setName(image[index].Name);
    setDetails(image[index].ShortDesc);
    }, []);

return(
<div className="right">

         <Show
         pic ={currentImage}
         name ={name}
         details ={details}
        />
     
    <div className="allimage">
         <div className="carousel">

             <Carousel cols={3} loop autoplay={3000}>
               {image.map((img, index) =>(

               <Carousel.Item> 
                 <img className="image1"
                 key={index}
                 alt=""
                 src={image[index].ImageUrl}
                 onClick={(e) => openImageViewer(index)}
                 />
                </Carousel.Item>

                ))}
             </Carousel>
        </div>   
    </div>
</div>
)}

export default Home;