import { data } from '../helpers/data';
import LanguageCards from './LanguageCards';
import './LanguageCards.css';

export default function FuncLangCards() {
  return (
    <div className='container'>
      <h1>Languages</h1>
      <div className='card-container'>
        {data.map(el => (
          <LanguageCards data={el} />
        ))}
      </div>
    </div>
  );
}
