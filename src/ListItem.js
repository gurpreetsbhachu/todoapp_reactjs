import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

export default function ListItem(props) {

    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list shadow-sm" key={item.key}>
                <p>
                    <input 
                    type="text" 
                    value={ item.text } 
                    id={ item.key } 
                    onChange={ (e) => {
                        props.setUpdate(e.target.value, item.key)
                    } } />

                    <span> 
                        <FontAwesomeIcon 
                        className="faicons" 
                        icon="trash"
                        onClick={ () => props.deleteItem(item.key)} /> 
                    </span>
                </p>
        </div>
    })

    return (
        <div>
            <FlipMove>
            {listItems}
            </FlipMove>
        </div>
    )
}
