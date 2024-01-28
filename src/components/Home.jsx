import { Carousel } from 'bootstrap'
import React, { useState, useEffect } from 'react'
import CarouselDiv from './CarouselDiv'
import placelist from "../placelist.json"
import PlaceItem from './PlaceItem.jsx'
import Detail from './Detail.jsx'

function Home(onSelectCategory) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const filterPlacesByCategory = (category) => {
    setSelectedCategory(category);
    console.log('Filtering by Category:', category);
  };

  const handleDetailClick = (placeId) => {
    setSelectedPlaceId(placeId);
  }


  return (
    <>
    <CarouselDiv onSelectCategory={filterPlacesByCategory}/>
  <hr /><br />
    <div className='container' style={{display:'flex', flexWrap: 'wrap', justifyContent:'center'}}>
      {
        placelist.filter((place)=> !selectedCategory || place.category === selectedCategory)
        .map((place) => 
          (<PlaceItem key={place.id} place={place} onDetailClick={handleDetailClick}/>))
      }
    </div>
    {selectedPlaceId && <Detail placeId={selectedPlaceId} />}

</>
  )
}

export default Home