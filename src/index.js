
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting,{Greeting1,Greeting2}from './Greeting.js';



const root = ReactDOM.createRoot(document.getElementById('root'));


 
root.render(
  <>
  <div className='main-container'>
  <Greeting name='PRAJAKTA'/>
  <Greeting1 name='MANASII'/>
  <Greeting2 name='MRUNAL'/>
  </div>
  </>
 
);
