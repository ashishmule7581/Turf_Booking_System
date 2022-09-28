import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
      
          <ul className='cards__items'>
            <CardItem
              src='images/challenger_img.jpg'
              text='Ready For Sports Challenge? Click here to post your challenge'
              label='Challengers'
              path='/challenger'
            />
            <CardItem
              src='images/groundsearch_img.jpg'
              text='Search And Book nearest Sports Ground from here'
              label='Ground Search'
              path='/groundbooking'
            />
            <CardItem
              src='images/teamsearch_img.jpg'
              text='Looking for Teammate or Team? Click here to Post your requirement'
              label='Team & Teammate Finder'
              path='/teamfinder'
            />
          </ul>
     
        </div>
      </div>
    </div>
  );
}

export default Cards;
