import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        console.log("ClearText was clicked");
        let newText = '';
        alert("CONFIRM !")
        setText(newText);
    }

    const handleCopyText = () => {
        console.log("copying the item");
        var text = document.getElementById("mybox");
        text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        document.execCommand("copy");
        alert("copied the text: " + text.value)
    }

    const handleExtraspaces = () => {
        console.log("handle extra spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnchange = (event) => {
        setText(event.target.value);

    }
    // declare a new state variable
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#58556b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>ClearText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>CopyText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>RemoveExtraspaces</button>
            </div>
            <div className="conatainer my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes</p>
                <h3>preview</h3>
                <p>{text.length > 0 ? text.toLowerCase() : 'Enter something in the textbox to preview it:--'}</p>
            </div>
        </>
    )
}
