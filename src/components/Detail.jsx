import React, { useEffect, useState } from 'react';
import placelist from '../placelist.json'; 
import { useParams } from 'react-router-dom';

function Detail() {
  const {id} =useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const selectedPlace = placelist.find((p) => p.id === parseInt(id));

    if (selectedPlace) {
      setPlace(selectedPlace);
    }
  }, [id]);

  if (!place) {
    return <div>Place bulunamadı.</div>;
  }

  return (
    <div>
      <h1>{place.name}</h1>
      <img src={place.img} alt={place.name} />
      <p>{place.detail}</p>
    </div>
  );
}

export default Detail;
