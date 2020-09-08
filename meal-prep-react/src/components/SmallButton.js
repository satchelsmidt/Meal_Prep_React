import React from 'react';
import Button from 'react-bootstrap/esm/Button'

export default function SmallButton(props) {
    return (
        <Button variant="primary" size="sm" block onClick={(e) => props.onClick(e)} style={styles.buttonStyle}>{props.text}</Button>
    );
}

const styles = {
    buttonStyle: {
        'width': '30%',
        'margin': '15px'
    }
}