import React, { useState } from 'react'
import people from './data'


function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const list = [0, 1, 2, 3]

  const checkNumber = (index) => {
    if (index > 3) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    console.log(randomNumber);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
        <i class="fa-solid fa-quote-right" />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <i class="fa-solid fa-angles-left" />
        </button>
        <button onClick={randomPerson} className='random-btn'>
          random one
        </button>
        <button className='next-btn'>
          <i class="fa-solid fa-angles-right" onClick={nextPerson}/>
        </button>
      </div>
    </article>
  )
}

export default Review;  
