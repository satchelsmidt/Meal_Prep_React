import React from 'react';
import Button from 'react-bootstrap/Button'

export default function BigButton(props) {
    return (
        <Button variant="danger" size="lg" block onClick={(e) => props.onClick(e)} style={styles.buttonStyle}>{props.text}</Button>
    );
}

const styles = {
    buttonStyle: {
        'width': '40%'
    }
}