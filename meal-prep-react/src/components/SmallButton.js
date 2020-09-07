import React from 'react';
import Button from 'react-bootstrap/esm/Button'

export default function SmallButton(props) {

    // const saveAndSubmit = () =>{
    //     console.log('clicked')
    //     // e.preventDefault()
    //     // props.nextStep()
    // }

    return (
    <Button variant="primary" size="sm" block 
    onClick={(e)=>props.onClick(e)}
    style={styles.createButton}>{props.text}</Button>
    );
}

const styles ={
    createButton: {
        'width': '15%',
        'margin': '15px'
    }
}