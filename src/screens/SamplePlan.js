import React from 'react'
import Calendar from './../components/Calendar'
import { Container } from 'react-bootstrap'


// export default function SamplePlan() {
//     return (
//         <Container style={styles.calendarContainer}>
//             <Calendar startDate={'2020-01-01'} endDate={'2020-01-08'}></Calendar>
//         </ Container>
//     )
// }

// const styles={
//     calendarContainer: {
//         'display': 'flex',
//         'flexDirection': 'column',
//         'alignItems': 'center',
//         'justifyContent': 'center',
//         'height': '500px'
//     }
// }

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'


export default function SamplePlan() {
  return (
    <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin]}
    initialView="timeGrid"
    visibleRange={{
        start: '2020-01-01',
        end: '2020-01-08',
    }}
    headerToolbar={{
        left: '',
        center: 'title',
        right: ''
    }}
/>
  )
}