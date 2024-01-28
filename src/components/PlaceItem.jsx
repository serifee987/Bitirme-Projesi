import React from 'react'
import { Link } from 'react-router-dom';

function PlaceItem({place, onDetailClick}) {
    const handleDetailClick=()=>{
        const placeId=place.id;
        onDetailClick(placeId);
        console.log('Seçilen id:',placeId);
    }
    return (
        <>
            <div style={{width:"300px", margin:"20px"}}>
                <img src={place.img} className="bd-placeholder-img rounded-circle" width="140" height="140" ></img>
                <h2 className="fw-normal">{place.name}</h2>
                <p>{place.detail} </p>
                <Link to={`/detail/${place.id}`} className="btn btn-secondary">Detay Gör &raquo;</Link>
            </div>



        </>
    )
}

export default PlaceItem