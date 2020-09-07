import React from '../../node_modules/@types/react'
import FullCalendar from '../../node_modules/@fullcalendar/react/dist/main'
import dayGridPlugin from '../../node_modules/@fullcalendar/daygrid/main'
import timeGridPlugin from '../../node_modules/@fullcalendar/timegrid/main'


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