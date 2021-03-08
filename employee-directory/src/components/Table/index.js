import React from 'react';
import "./style.css";

function Table(props) {
    return (
        <table className="table">
            <Header/>
            <tr>
                <td>{props.name}</td>
                <td>{props.occupation}</td>
                <td>{props.sign}</td>
                <td>{props.food}</td>
            </tr>
        </table>
    );
}
export default Table;
