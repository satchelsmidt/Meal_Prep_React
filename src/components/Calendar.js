import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Container } from 'react-bootstrap'

export default function Calendar(props) {
    return (
        // <Container style={styles.calendarContainer}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGrid"
                visibleRange={{
                    start: props.startDate,
                    end: props.endDate,
                }}
                header={{
                    left: '',
                    center: 'title',
                    right: ''
                }}
            />
        // </ Container>
    )
}

const styles = {
    calendarContainer:{
        'backgroundColor' : 'grey'
    }
}