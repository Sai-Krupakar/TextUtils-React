// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {
    // let myStyle={
    //     color: 'white',
    //     backgroundColor: 'black'
    // }
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     //border: '20px solid-white'
    // })
    let myStyle={
        color: props.mode==="dark"?"white":'#042743',
        backgroundColor: props.mode==="dark"?"rgb(36 74 104)":'white',
    }

    // const [btnText, setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.backgroundColor ==='white')
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             //border: '20px black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             //border: '20px solid-white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className="container" style={{color: props.mode==="dark"?"white":'#042743'}}>
        <h1 className="my-3" >About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and effectively. Be it word count or character count. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character control tool that provides instant character count & word count statistcis for a given text. TextUtils reports the number of words and characters.  Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document,pdf document, essays, etc. 
                </div>
                </div>
            </div>
        </div>
        {/* <div className="conatiner my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
