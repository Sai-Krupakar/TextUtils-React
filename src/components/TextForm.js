import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleCopy=()=>{
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard!","success");
    }

    const handleExtraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>Time to Read: {0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

