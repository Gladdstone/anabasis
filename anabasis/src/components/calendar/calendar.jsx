function Calendar({ gridClassName }) {

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div className="calendar">
        <div className="calendar-header">
          <div className="calendar-cell empty" />
          {days.map(day => (
            <div key={day} className="calendar-cell header">
              {day}
            </div>
          ))}
        </div>

        {hours.map(hour => (
          <div key={hour} className="calendar-row">
            <div className="calendar-cell hour">{hour}:00</div>
            {days.map(day => (
              <div
                key={`${day}-${hour}`}
                className={gridClassName}
              />
            ))}
          </div>
        ))}
      </div>
    )
}

export default Calendar;

