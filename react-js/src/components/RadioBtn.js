import React from 'react'
import { useState } from 'react';

const RadioBtn = () => {

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
                <h3>Select Game</h3>
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
                <h4>{selectGame}</h4>
            </div>

            <div className="select-day">
                <h3>Select Day</h3>
                {
                    days.map((day, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="day"
                                value={day}
                                onChange={handleSelectedDay}
                                checked={selectDay === day}
                            />
                            {day}
                        </label>
                    ))
                }
                <h4>{selectDay}</h4>
            </div>
        </div>
    )
}

export default RadioBtn
