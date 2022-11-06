import React from 'react'

const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
  return (
    <div>
        <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
        >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
    </div>
  )
}

export default Teams