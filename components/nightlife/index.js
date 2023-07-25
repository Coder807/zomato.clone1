import React from 'react'
import "./nightlife.css"
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { nightLife } from '../../data/Nightlife';

const collectionList=[
  {
    id:1,
    title:"12 Ice Cream Day Special",
    cover:"https://b.zmtcdn.com/data/collections/a49100035b401882410ada830285b01b_1689553540.png",
    places:"12 Places",
  },
  {
    id:2,
    title:"10 Unique Dining Experience",
    cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places:"10 Places",
  },
  {
    id:3,
    title:"21 Best Insta-Worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places:"21 Places",
  },
  {
    id:4,
    title:"16 Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places:"16 Places",
  },
  {
    id:5,
    title:"10 Celeb-loved Places",
    cover:"	https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
    places:"10 Places",
  },
  {
    id:6,
    title:"13 Best Korean Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png",
    places:"13 Places",
  },
  {
    id:7,
    title:"24 Great Cafes",
    cover:"https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
    places:"24 Places",
  },
  {
  id:8,
  title:"26 Serene Rooftop Places",
  cover:"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
  places:"26",
},
];
const nightFilters=[
  {
    id:1,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <i className='fi fi-bs-sort-alt absolute-center'></i>

  },
  {
    id:6,
    title: "Great Offers",
  },

];
 const nightList=nightLife;
const NightLife = () => {
  return (
    <div>
      <Collection List={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection List={nightList} collectionName='
Nightlife Restaurants in Raipur' />
    </div>
  )
}

export default NightLife
