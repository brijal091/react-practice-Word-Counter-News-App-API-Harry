import React from 'react'

export default function CustomTheme(props) {
  return (
    <div className='container my-5'>
        <h2>Custom Theme</h2>
        <div className="theme-container">
            <label htmlFor="favcolor">Choose BackColor</label>
            <input className="mx-2" type="color" id="back-Color" name="backgroundColor"></input>
            <label htmlFor="favcolor">Text Color</label>
            <input className="mx-2" type="color" id="text-Color" name="textColor"></input>
            <input className='btn btn-primary' type="button" value="Submit" onClick={props.changeTheme}/>
        </div>
    </div>
  )
}
