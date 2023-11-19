import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div>
      <h1 className='app-title'>▶️contact app</h1>


      <div classname="app-body">

        <div className='contact-container'>
          <h2> Display contact</h2>
        </div>

        <div className='add-contact-container'>
          <h2>Add contact</h2>
        </div>
      </div>
    </div>
  )
}

export default Home