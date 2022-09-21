import React, {useState} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import $ from 'jquery'

export default function About() {    
    // This is my Texhnique to Create Dark Mode and we can remove style attribute from main-container
    // const myStyle = () => {
        //     if ($("#theme").attr('theme') == "Darkmode"){
            //         $("#main-container").attr("style","filter: invert(100%)");    
            //         $("#theme").attr("theme", "Lightmode")
            //     }
            //     else if ($("#theme").attr('theme') == "Lightmode"){
                //         $("#main-container").attr("style","filter: invert(0%)");    
                //         $("#theme").attr("theme", "Darkmode")
                //     }
                // }

// ================================================================================================

// code with harry methond 
    const [theme, setTheme] = useState({
        color: 'black',
        backgroundColor: 'white'
     })
    const [btnTex, setBtnTex] = useState("Enable Dark Mode")
     const myStyle = () =>{
         if (theme.color === 'black'){
             setTheme({
                color: 'white',
                backgroundColor: 'black'
             })
             setBtnTex("Enable Light Theme")
         }
         else{
             setTheme({
                 color:'black',
                 backgroundColor:'white'
             })
             setBtnTex("Enable Dark Theme")
         }
     }
    return (
    <>
    <HelmetProvider>
            <Helmet>
            <title>Word Counter | About</title>
            </Helmet>
        </HelmetProvider>
    <div className="container">
        <h1 className='mt-5'>About Us</h1>
        <div id="main-container">
            {/* This is Accordian from component --> Bootstrap  */}
            <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item"  style={theme}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item"  style={theme}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item"  style={theme}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <button id="theme" type="button" className="btn btn-dark mt-4" onClick={myStyle} theme="Darkmode"> {btnTex} </button>
            </div>
        </div>
    </div>
    </>
  )
}
