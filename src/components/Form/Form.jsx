import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder='city'/>
            <button>get the weather</button>
        </form>
    )
}

export default Form;