import React from 'react';           
      
function Rows(props) {
   return (
        <tr>
            <td>{props.name}</td>
            <td>{props.occupation}</td>
            <td>{props.sign}</td>
            <td>{props.food}</td>
        </tr>
    )
}

export default Rows;