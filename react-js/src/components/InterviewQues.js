import React, { useState } from 'react'

const InterviewQues = () => {

  const games = ["Chess", "Football", "Basketball", "Tennis"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [selectGame, setSelectGame] = useState(''),
    [selectDay, setSelectDay] = useState('');

  const handleSelectedGame = (e) => {
    setSelectGame(e.target.value);
  }

  const handleSelectedDay = (e) => {
    setSelectDay(e.target.value);
  }

  return (
    <div>
      <div className="select-game">
        <h2>Select Game</h2>
        {
          games.map((game, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="game"
                value={game}
                onChange={handleSelectedGame}
                checked={selectGame === game}
              />
              {game}
            </label>
          ))
        }
        <h3>{selectGame}</h3>
      </div>
      <div className="select-day">
        <h2>Select Day</h2>
        {
          days.map((day, idx) => (
            <label>
              <input type="radio"
                name="day"
                value={day}
                onChange={handleSelectedDay}
                checked={selectDay === day}
              />
              {day}
            </label>
          ))
        }
        <h3>{selectDay}</h3>
      </div>
    </div>
  )
}

export default InterviewQues
