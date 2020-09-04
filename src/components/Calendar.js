import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'


export default function SamplePlan(props) {

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGrid"
            visibleRange={{
                start: props.startDate,
                end: props.endDate,
            }}
            headerToolbar={{
                left: '',
                center: 'title',
                right: ''
            }}
            events={props.events}
            allDaySlot={false}
            slotMinTime="05:00:00"
            // slotMaxTime="00:00:00"
            />
    )
}