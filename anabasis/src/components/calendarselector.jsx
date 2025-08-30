import React, { useState, useRef } from 'react';
import './calendarselector.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8AM to 7PM

function CalendarSelector({ onSelectionChange }) {
  const [selected, setSelected] = useState(new Set());
  const isDragging = useRef(false);

  const cellKey = (day, hour) => `${day}-${hour}`;

  const handleMouseDown = (day, hour) => {
    isDragging.current = true;
    toggleCell(day, hour);
  };

  const handleMouseEnter = (day, hour) => {
    if (isDragging.current) toggleCell(day, hour);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const toggleCell = (day, hour) => {
    const key = cellKey(day, hour);
    setSelected(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }

      onSelectionChange?.(Array.from(newSet));
      return newSet;
    });
  };

  return (
    <div className="calendar" onMouseUp={handleMouseUp}>
      <div className="calendar-header">
        <div className="calendar-cell empty" />
        {days.map(day => (
          <div key={day} className="calendar-cell header">{day}</div>
        ))}
      </div>

      {hours.map(hour => (
        <div key={hour} className="calendar-row">
          <div className="calendar-cell hour">{hour}:00</div>
          {days.map(day => {
            const key = cellKey(day, hour);
            const isSelected = selected.has(key);
            return (
              <div
                key={key}
                className={`calendar-cell time-block ${isSelected ? 'selected' : ''}`}
                onMouseDown={() => handleMouseDown(day, hour)}
                onMouseEnter={() => handleMouseEnter(day, hour)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CalendarSelector;
