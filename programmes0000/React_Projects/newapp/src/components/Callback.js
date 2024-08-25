import React from 'react'
import { useState } from 'react'


const Callback = ({ getData, getColor }) => {
    const [color, setColor] = useState('');
    const [Text1, setText1] = useState('');

    const handleChange = (e) => {
        getColor(e.target.value)
        setColor(e.target.value);
        //getColor(color);
    }
                                                           
    const handleClick = (e) => {
        setText1(e.target.value)
        getData(Text1);
    }
    return (
        <>
            <div>
                <input type="text"
                    onChange={handleChange}
                    value={color}
                    placeholder=" Type color name"
                />
                                                                  
            </div>
            <div style={{ marginTop: '20px' }} >
                <input type="text"
                    onChange={handleClick}
                    value={Text1}
                    placeholder="Type text"
                />
            </div>

            <button style={{ marginTop: "10px" }} onClick={handleChange}>Click Me</button>
        </>
    )
}

export default Callback
