import React, { useEffect, useState } from 'react'
import './Carousel.css'
import { Carousel } from 'bootstrap'

function CarouselDiv({ onSelectCategory, setHead }) {
  const [placeCategory, setPlaceCategory] = useState('')

  const aHandleClick = (aCat) => {
    setPlaceCategory(aCat)
    onSelectCategory(aCat);
  }
    useEffect(() => {
      console.log(placeCategory);
    }, [placeCategory]);


    return (
      <>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src="/img/kizlar.jpg" className="d-block w-100"
                height="600" alt="Slide 1" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Tarihi Mekanlar</h1>
                  <p className="opacity-75">Meram'ın görülmeye değer muhteşem tarihi yapıları, camii ve türbeleri...</p>
                  <p><a className="btn btn-lg btn-dark" href="#" onClick={() => aHandleClick('tarihi')}>Detay Gör</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/smb1.jpg" className="d-block w-100"
                height="600" alt="Slide 1" />

              <div className="container">
                <div className="carousel-caption">
                  <h1>Mesire ve Piknik Alanları</h1>
                  <p>Yeşil Meram'ın mutlaka görülmesi gereken muhteşem mesire ve piknik alanları...</p>
                  <p><a className="btn btn-lg btn-dark" href="#" onClick={() => aHandleClick('mesire')}>Detay Gör</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/park1.jpg" className="d-block w-100"
                height="600" alt="Slide 1" />            <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Park ve Bahçeler</h1>
                  <p>Çocuklarınızla, ailenizle ve sevdiklerinizle keyifli ve eğlenceli vakit geçirebileceğiniz eğlenirken dinleneceğiniz Meram'ın en güzel parkları.</p>
                  <p><a className="btn btn-lg btn-dark" href="#" onClick={() => aHandleClick('park')}>Detay Gör</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>)
  }

  export default CarouselDiv