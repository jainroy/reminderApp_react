import React, { useState } from 'react'
import './Reminder.css'

function Reminder() {
  const [reminder, setReminder] = useState([])
  const [newReminder, setNewReminder] = useState("")

  const handleInputChange = (event) => {
    setNewReminder(event.target.value)
  }

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder])
      setNewReminder("")
    }
  }

  const handleDeleteReminder = (index) => {
    setReminder(reminder.filter((_, i) => i !== index))
  }

  return (
    <div className='container'>
      <h1>Reminder App</h1>

      <div className='input-container'>
        <input 
          type="text" 
          placeholder='Enter reminder...' 
          value={newReminder} 
          onChange={handleInputChange} 
        />
        <button className='add-btn' onClick={handleAddReminder}>
          Add
        </button>
      </div>

      {reminder.length > 0 ? (
        <ul className='reminder-list'>
          {reminder.map((item, index) => (
            <li key={index}>
              {item}
              <button 
                className='delete-btn' 
                onClick={() => handleDeleteReminder(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-reminders">No reminders yet</p>
      )}
    </div>
  )
}

export default Reminder
