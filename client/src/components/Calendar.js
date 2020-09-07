import React from '../../node_modules/@types/react'
import FullCalendar from '../../node_modules/@fullcalendar/react/dist/main'
import dayGridPlugin from '../../node_modules/@fullcalendar/daygrid/main'
import timeGridPlugin from '../../node_modules/@fullcalendar/timegrid/main'

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
        />
    )
}