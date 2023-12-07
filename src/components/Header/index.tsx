
import { Outlet } from 'react-router-dom';
import './styles.scss'

export default function Header() {

  const word = 'AND'; // Your word

  return (
    <>
      <div className='logo'>
        <p id="fst-part">
          {word.split('').map((letter, index) => (
            <div key={index} className='letter-container'>
              <span className='letter'>{letter}</span>
            </div>
          ))}
        </p>
        <span className="scnd-part">Têxtil</span>
      </div>
      <Outlet />
    </>
  )
}
