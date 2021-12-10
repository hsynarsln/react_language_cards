import { useState } from 'react';
import './LanguageCards.css';

export default function LanguageCards(props) {
  // console.log(props);
  const [front, setFront] = useState(true);
  const makeReverse = () => {
    setFront(!front);
    // console.log(front);
  };
  return (
    <div className='card-childs-container'>
      <div className='cards' onClick={makeReverse}>
        {front ? (
          <>
            <img src={props.data.image} alt={props.data.title} />
            <div className='title'>
              <h2>{props.data.title}</h2>
            </div>
          </>
        ) : (
          <ul className='list'>
            {props.data.desc.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
