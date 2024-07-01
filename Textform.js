import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };

    const handleLoClick = ()=>{
      // console.log("uppercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  };
  const handleClearClick = ()=>{
    // console.log("uppercase was clicked"+text);
    let newText=' ';
    setText(newText);
    props.showAlert("Text cleared","success");
}
const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
  props.showAlert("Copied to clipboard","success");
};
const handleExtraSpaces = () => {
  let newText = text.split(/\s+/).join(" ");
  setText(newText);
  props.showAlert("remove extra spaces","success");

};

const handleOnChange=(event)=>{
   console.log("On change");
   setText(event.target.value);
       
  };
    const [text, setText] = useState('');
    // text="new text";//wrong way to change the state
    // setText("new text");//right way to change the state
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#02101d'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
     
       <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#02101d'}}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#02101d'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} and {text.length}</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>

</div>
    </>
  )
}
