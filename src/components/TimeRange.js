import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';

export default function TimeRange(props) {

    const [startTime, setStartTime] = useState(props.startTime)
    const [endTime, setEndTime] = useState(props.endTime)
    // const [startTime, setStartTime] = useState(props.planTimes[props.dayIndex][props.timeIndex][0])
    // const [endTime, setEndTime] = useState(props.planTimes[props.dayIndex][props.timeIndex][1])
    
    //grab list of all times
    console.log('All times of plan (WHEN TIMEPICKER LOADS): ', props.planTimes) 

    const changeStartTime = (date) => {
        props.updateTimeBoxes(props.dayIndex, props.timeIndex, date, 0)
        setStartTime(date)
    }

    const changeEndTime = (date) => {
        props.updateTimeBoxes(props.dayIndex, props.timeIndex, date, 1)
        setEndTime(date)
    }

    useEffect(() => {
        setStartTime(props.planTimes[props.dayIndex][props.timeIndex][0])
        setEndTime(props.planTimes[props.dayIndex][props.timeIndex][1])
    }, [props.planTimes, props.dayIndex, props.timeIndex])

    return (
        <Container style={styles.timeContainer}>
            <DatePicker
                selected={startTime}
                onChange={date => changeStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <h5 style={{ 'color': 'black', 'margin': '10px' }}>to</h5>
            <DatePicker
                selected={endTime}
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