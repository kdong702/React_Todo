import React from 'react';
import './Week.css';


const days = ['일', '월', '화','수','목','금','토'];

const WeekItem = ({ day, active, onClick }) => {
  return (
    <div
      className={`PaletteItem ${active ? 'active' : ''}`}
      value={ day }
      onClick={onClick}
    >{day}</div>
  );
};

const Week = ({ selected ,onSelect}) => {
  return (
    <div className="Palette">
      <h2>요일을 골라</h2>
      <div className="days">
        {days.map(day => (
          <WeekItem day={day} key={day} active={selected === day} onClick={()=>onSelect(day)} />
        ))}
      </div>
    </div>
  );
};

export default Week;
