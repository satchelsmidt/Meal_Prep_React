import React from 'react'
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