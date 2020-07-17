import React from 'react';
import Button from 'react-bootstrap/Button'

export default function BigButton(props) {
    return (
    <Button variant="primary" size="lg" block style={styles.createButton}>{props.text}</Button>
    );
}

const styles ={
    createButton: {
        'width': '30%'
    }
}