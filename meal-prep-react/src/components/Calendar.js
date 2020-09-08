import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import ReactTooltip from 'react-tooltip'

export default function SamplePlan(props) {

    //TODO: Include 'on-hover' event to expand event description
    // const handleEventPositioned = (info) => {
    //     console.log('this is info from hover', info)
    //     // info.el.setAttribute("data-tip", "Hello There");
    //     // ReactTooltip.rebuild();
    // }

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
            // eventMouseEnter={(e) => handleEventPositioned(e)}
            events={props.events}
            allDaySlot={false}
            slotMinTime="05:00:00"
        />
    )
}