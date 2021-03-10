import React from "react";

function Button(props) {
    return (
        <button onClick={() => props.aries(props.sign)} className="aries">Get All Aries!</button>
    )
}
export default Button;