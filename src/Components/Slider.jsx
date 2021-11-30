import React from 'react'

const Slider = () => {
    return (
    <div className="container slider-personal">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators" >
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
            </ol>

            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <a href="/productos"><img src="/img/sliders/Banner_Productos.jpg" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                    </div>
                </div>
                
                <div className="carousel-item">
                    <a href="/productos/Star Wars"><img src="/img/sliders/Banner_StarWars.jpg" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                    </div>
                </div>

                <div className="carousel-item">
                    <a href="/productos/Anime"><img src="/img/sliders/Banner_Pokemon.jpg" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                    </div>
                </div>

                <div className="carousel-item">
                    <a href="/productos/Hora de Aventura"><img src="/img/sliders/Banner_HoraAventura.jpg" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                    </div>
                </div>

            </div>
            
            <button className="carousel-control-prev" type="button" 
            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="sr-only"></span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

        </div>
    </div>
    
    )
}

export default Slider
