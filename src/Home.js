import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image' src='https://m.media-amazon.com/images/I/71apMHZ11PL._SX3000_.jpg'
                alt=''
                />

                <div className="home__row">
                    <Product 
                    id='1000'
                    title='The Way of the Superior Man: A Spiritual Guide to Mastering the Challenges'
                    price={30}
                    image='https://images-na.ssl-images-amazon.com/images/I/51u5pkflgoL._SX342_BO1,204,203,200_.jpg'
                    rating={5}
                    />
                    <Product 
                      id='1001'
                      title='OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep'
                      price={30}
                      image='https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL450_SR450,320_.jpg'
                      rating={5}
                    />
                    
                    
                    
                </div>
                <div className="home__row">
                <Product 
                  id='1002'
                  title='VEGA Blooming Air Foldable 1000 Watts Hair Dryer With Heat & Cool Setting And Detachable Nozzle'
                  price={30}
                  image='https://images-eu.ssl-images-amazon.com/images/I/51II2CXDt2L._AC_UL160_SR160,160_.jpg'
                  rating={5}
                />
                    <Product 
                      id='1003'
                      title="Amazon Brand - Symbol Men's Regular Polo Shirt "
                      price={30}
                      image='https://images-eu.ssl-images-amazon.com/images/I/81e+UT04BuL._AC_UL100_SR100,100_.jpg'
                      rating={5}
                    />
                    <Product 
                      id='1004'
                      title='The lean startup- Powerful book to live the best life by Eric ries'
                      price={30}
                      image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
                      rating={5}
                    />
                    
                    
                </div>
                <div className="home__row">
                <Product 
                  id='1005'
                  title='Half girlfriend bollywood movie music album mp3'
                  price={30}
                  image='https://images-eu.ssl-images-amazon.com/images/I/91dqlrmy0SL._AC_UL450_SR450,320_.jpg'
                  rating={5}
                  />
                    
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Home;

