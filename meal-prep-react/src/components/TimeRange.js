import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

export default function TimeRange(props) {

    const [startTime, setStartTime] = useState(props.startTime)
    const [endTime, setEndTime] = useState(props.endTime)

    const changeStartTime = (date) => {
        props.updateTimeBoxes(props.dayIndex, props.timeIndex, date, 0)
        setStartTime(date)

        //If start time set, auto set end time to 1 hour later
        let datePlusOneHour = new Date(moment(date).add(1, 'hours').format())
        props.updateTimeBoxes(props.dayIndex, props.timeIndex, datePlusOneHour, 1)

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
                popperPlacement="bottom" popperModifiers={{
                    flip: {
                        behavior: ["bottom"]
                    },
                    preventOverflow: {
                        enabled: false
                    },
                    hide: {
                        enabled: false
                    }
                }}
                selected={startTime}
                onChange={date => changeStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <h5 style={styles.timeText}>to</h5>
            <DatePicker
                popperPlacement="bottom" popperModifiers={{
                    flip: {
                        behavior: ["bottom"]
                    },
                    preventOverflow: {
                        enabled: false
                    },
                    hide: {
                        enabled: false
                    }
                }}
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
    },
    timeText: {
        'color': 'white',
        'margin': '10px'
    }
}