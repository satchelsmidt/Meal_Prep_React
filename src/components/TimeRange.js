import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function TimeRange() {

    const [startTime, setStartTime] = useState(new Date())

    return (
        <Container style={styles.timeContainer}>
            <DatePicker
                selected={startTime}
                onChange={date => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <h5 style={{ 'color': 'black', 'margin': '10px' }}>to</h5>
            <DatePicker
                selected={startTime}
                onChange={date => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
        </Container>
    );
}

const styles = {
    timeContainer: {
        'display': 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'center',
        // 'height': '400px'
    },
}