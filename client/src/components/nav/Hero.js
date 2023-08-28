import React, { useState, useEffect } from 'react';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { fetchBanners } from '../store/asyncAction/NewsAction';
import Gallerys from '../../pages/Gallery';


const Hero = () => {

  const { banners } = useSelector(state => state.NewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return <Carousel activeIndex={index} onSelect={handleSelect} className="img" >

    {banners.map(b => (
      <Carousel.Item className='px-md-5' key={b._id}>
        <img src={`/images/${b.image}`} className=" d-block w-100" alt="img" />
      </Carousel.Item>
    ))}
  </Carousel>;
};

export default Hero;
