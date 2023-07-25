import React from 'react'
import "./topbrands.css";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const topBrandsList =[
    {
        id:1,
        time: "17 min",
        title:"KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589434257.png",
    },
    {
        id:2,
        time:"25 min",
        title:"Domino's Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550060573.png",
    },
    {
        id:3,
        time:"18 min",
        title:"Pizza Hut",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613213377.png",
    },
    {
        id:4,
        time:"16 min",
        title:"Delhi Sweets",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bcb9ca0b8f617ae52f40689906f1cd4f_1605104328.png",
    },
    {
        id:5,
        time:"33 min",
        title:"Moti Mahal",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/b1d69bc6ea626ee8586f712d670a0ece_1605102964.png",
    },
    {
        id:6,
        time:"20 min",
        title:"Maosaji",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/62c807d4aadf885f2582e53e68986493_1605102854.png",
    },
    {
        id:7,
        time:"28 min",
        title:"Natural Ice Cream",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
    },
    {
        id:8,
        time:"15 min",
        title:"Kwality Wall’s Frozen Dessert and Ice Cream Shop",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cbe80f37cf57a27b8784dc0ff832fd70_1658816817.png",
    },
];

const settings = {
   
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const TopBrands = () => {
  return <div className='top-brands max-width'>
  <div className='collection-title'>Top brands for you</div>
     <Slider {...settings}>
        {topBrandsList.map((brand)=>{
            return <div>
                <div className='top-brands-cover'>
                    <img src={brand.cover} 
                    className='top-brands-image'
                     alt={brand.title} />
                </div>
                <div className='top-brands-title'>{brand.title}</div>
            </div>
        })}
     </Slider>
    </div>
  
}

export default TopBrands
