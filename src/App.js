import React,{useState} from "react";
import ReactMarkdown from "react-markdown";

import "./App.css"
 

const App =()=>{

const[start,setStart] =useState(`
# hello world
## My name is Sphesihle

**I really enjoy coding**
- Reactjs
- Nodejs
- CSS
### Code example

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
![alt text](image.jpg)
> blockquote
\` <div></div> \`
[google](https://www.google.com/)
`
);


const changeName =(event)=>{
    setStart(event.target.value)
    
}
    return(
        
        <div className="container" >
            <div className="editor-container">
            <h1 className="heading">Editor</h1>
            
            <textarea cols="30" rows="15" name="start" value={start} onChange={changeName} id="editor"/>
            
             </div>

             <div className="preview-container">
                <h1 className="heading">Preview</h1>
            <div id="preview">
             
             <ReactMarkdown>{start}</ReactMarkdown>
              
            </div>
            </div>

            
        </div>
        
        
    )
}
export default App;

