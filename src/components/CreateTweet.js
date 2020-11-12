import React, { useState } from 'react'


function CreateTweet() {

    //state
    const [textInput,setInputText] = useState('');
    //functions
    const userInputHandler = (e) => {
        setInputText(e.target.value);
    }
    return (
        <div className="tweet">
            <form>
                <textarea value={textInput} onChange={userInputHandler}  cols="50" rows="5"></textarea>
                <button>submit</button> 
            </form>
        </div>
    )
}

export default CreateTweet
