"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, { Draggable, DropArg} from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

export const page = () => {
  return (
    <main className=" mb-12 justify-between border-b-2 border-tertiary p-4">
    <div className="grid grid-cols-10">
        <div className="col col-span-8 ">
        <FullCalendar
        plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
        ]}

        headerToolbar={{
            left: 'prev, next, today',
            center: 'title',
            right: 'dayGridMonth'
        }}

        events={
            {}
        }
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        // dateClick={{}}
        // drop={}
        // eventClick={}

        />
        </div>
    </div>
    </main>
  )
}

export default page;
