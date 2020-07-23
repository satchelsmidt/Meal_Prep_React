import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';

export default function TimeRange() {

    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())


    let timeStart = new Date()
    let timeEnd = new Date()

    const changeStartTime=(date)=>{
        console.log('this is... date?: ', date)
        // timeStart = date
        setStartTime(date)
        console.log('thisis UPDATE timestart: ', timeStart)
    }

    const changeEndTime=(date)=>{
        timeEnd = date
        setEndTime(date)
    }

    return (
        <Container style={styles.timeContainer}>
            <DatePicker
                // selected={timeStart}
                selected={startTime}
                // onChange={date => changeStartTime(date)}
                onChange={date => changeStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <h5 style={{ 'color': 'black', 'margin': '10px' }}>to</h5>
            <DatePicker
                // selected={timeEnd}
                selected={endTime}
                // onChange={date => changeEndTime(date)}
                onChange={date => changeEndTime(date)}
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
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        // 'height': '400px'
    },
}