import React, { useState, useEffect } from 'react';
import './SampleComponent.css';

const SampleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dataSequence = [
    { number: "1,034", text: "Sample Data about Sample Things" },
    { number: "2", text: "Sample Data about Sample" },
    { number: "54", text: "Sample Data about Sample" },
    { number: "25", text: "Sample Data about Sample" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      <div className='background-elements'>
        <div className='star-trajectories'>
          <div className='trajectory trajectory-1'>
            <div className='star star-start'></div>
            <div className='star star-end'></div>
          </div>
          <div className='trajectory trajectory-2'>
            <div className='star star-start'></div>
            <div className='star star-end'></div>
          </div>
        </div>
      </div>

      <div className='data-grid'>
        {dataSequence.map((item, index) => (
          <div 
            key={index} 
            className={`data-item ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h1 className='number'>{item.number}</h1>
            <p className='text'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleComponent;