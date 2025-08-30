import CalendarSelector from './calendarselector.jsx';

import React, { useState } from 'react';
import './calendarselector.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({ length: 12 }, (_, i) => i + 8);

const mockRoster = [
  {
    name: 'Tom',
    availability: new Set(['Mon-8', 'Mon-9', 'Tue-10']),
  },
  {
    name: 'Tom',
    availability: new Set(['Mon-9', 'Tue-10', 'Wed-11']),
  },
  {
    name: 'Also Tom',
    availability: new Set(['Tue-10', 'Wed-11', 'Thu-12']),
  },
];

function Admin() {
  const [hoveredName, setHoveredName] = useState(null);
  
  const getCellClass = (day, hour) => {
      const key = `${day}-${hour}`;
      let classNames = 'calendar-cell time-block';

      const isHoveredUser =
        hoveredName &&
        mockRoster.find(u => u.name === hoveredName)?.availability.has(key);

      const isSelectedByAnyone = mockRoster.some(user => user.availability.has(key));

      if (isSelectedByAnyone) {
        classNames += ' selected';
      }

      if (isHoveredUser) {
        classNames += ' highlight';
      }

      return classNames;
  };

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
                className={getCellClass(day, hour)}
              />
            ))}
          </div>
        ))}
      </div>

      <div>
        <h3>Roster</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {mockRoster.map(user => (
            <li
              key={user.name}
              className={`roster-name ${hoveredName === user.name ? 'active' : ''}`}
              onMouseEnter={() => setHoveredName(user.name)}
              onMouseLeave={() => setHoveredName(null)}
              style={{
                padding: '4px 8px',
                cursor: 'pointer',
                backgroundColor: hoveredName === user.name ? '#eee' : 'transparent',
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Admin;

