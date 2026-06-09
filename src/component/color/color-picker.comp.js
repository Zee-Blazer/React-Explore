import React, { useState } from 'react';

// Icons
import { FaRegCopy } from "react-icons/fa6";

import colors from '../../utils/color';

const ColorPickerComp = () => {

    const [color, setColor] = useState();

    const copyToClipboard = async (text) => {
        try{
            await navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
        }catch(err) {
            alert("Failed to copy to clipboard.");
        }
    }

    const pickRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
    }

    return (
        <div>
            <h1>Pick a Color</h1>

            {
                color ? (
                    
                    <div>
                        {
                            color.map( (c, key) => (
                                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                        <div style={{ backgroundColor: c.color, width: 20, height: 20 }}></div>
                                        <p>{c.type}: {c.color}</p>
                                        <FaRegCopy onClick={ () => copyToClipboard(c.color) } />
                                    </div>
                                )
                            )
                        }
                    </div>
                ) : "No color picked yet."
            }

            <button onClick={ pickRandomColor }>Pick Random Color</button>
        </div>
    );
}

export default ColorPickerComp;
