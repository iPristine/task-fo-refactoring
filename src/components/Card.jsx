import React, {useState} from 'react';
import './../styles/Card.css';

const Card = (props) => {
    const {description, id, changeCheck, completed, removeCard} = props
    const [check, setCheck] = useState(completed)
    const CheckChange = () => {
        changeCheck(id)
        setCheck(!check)
    }
    return (
        <div className="poshelnahuy">
            {completed}
            {description} <input type="checkbox" checked={false} onChange={CheckChange}/>
            <button onClick={() => {
                removeCard(id)
            }}>delete
            </button>
        </div>
    );
}

export default Card;
