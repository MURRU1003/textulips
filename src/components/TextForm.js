import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }; // Fixed: Extra }; removed from here

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleItalicClick = () => {
    const textarea = document.getElementById('myBox');
    textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
    props.showAlert("Italic text applied!", "success");
  };

  const handleBoldClick = () => {
    const textarea = document.getElementById('myBox');
    textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
    props.showAlert("Bold text applied!", "success");
  };

  const handleselectallClick = () => {
    const textarea = document.getElementById('myBox');
    textarea.select();
  };

  const handleCopyClick = () => {
    const textarea = document.getElementById('myBox');
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleclearClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', 
              color: props.mode === 'dark' ? 'white' : '#042743'
            }} 
            id="myBox" 
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleItalicClick}>Convert Italic</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleBoldClick}>Convert Bold</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleselectallClick}>Select All</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
      </div>
      
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}