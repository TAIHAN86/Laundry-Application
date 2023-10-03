export default function Greeting(props) {
    return(
      <>
    <div className='main-container'>
     
      <div className='cards'><h1 className='happy-bday'><sup className='h-letter'>H</sup>APP<sub className='y-letter'>Y</sub>&nbsp;&nbsp;&nbsp;<span className='h-letter'>B</span>IRTHDA<sub className='y-letter'>Y</sub> </h1><h1 className='name'>✨🥀{props.name}..!!🥂🍰</h1>
     <br/> 
      
      <span className="tagline-red">“Count your life by smiles, not tears.</span> <span className="friends">Count your age by friends, not years.I wish that your birthday is as beautiful as you are.<br/><br/></span>Happy birthday!”
“<span className="tagline-violet">Happy birthday!😍 </span><span className="wish">I hope all your birthday wishes and dreams come true.”</span>
      
      
      </div>
      
     
   </div>
  </>
    )
    }


   export function Greeting1(props) {
        return(
          <>
        <div className='main-container'>
          <div className='cards'><h1 className='happy-bday'><sup className='h-letter'>H</sup>APP<sub className='y-letter'>Y</sub>&nbsp;&nbsp;&nbsp;<span className='h-letter'>D</span>IWAL<sub className='y-letter'>I</sub> </h1><h1 className='name'>✨🥀{props.name}..!!🥂🍰</h1>
          <br/>
          <span className="tagline-red">Happy Diwali my friend.”</span><span className="friends"> “On  the occasion of Diwali, I am sending warm wishes on Diwali to my dearest friend and his family….</span><br/><br/> “May you have a blessed and fun-filled<span className="tagline-violet">Diwali🤩</span><span>with your family….May you enjoy the fire-  works and sweets, celebrations.</span>
          </div>
       </div>
      </>
        )
        }
    
     export  function Greeting2(props) {
          return(
            <>
          <div className='main-container'>
            <div className='cards'><h1 className='happy-bday'><sup className='h-letter'>H</sup>APP<sub className='y-letter'>Y</sub>&nbsp;&nbsp;&nbsp;<span className='h-letter'>H</span>OL<sub className='y-letter'>I</sub> </h1><h1 className='name'>✨🥀{props.name}..!!🥂🍰</h1>
            
            <br/>
            <span className="tagline-red">Wishing you all a blessed & Happy Holi.</span> <span className="friends">Have a fantastic & colorful Holi festival this year.</span><br/><br/><br/> Happy Holi! Wishing you a Holi filled with sweet memories to cherish for a long time.

May your life get filled with colors.<span className="tagline-violet">Happy Holi!🤩</span><span></span>
            
            
            </div>
        
         </div>
        </>
          )
          }
  