import React from 'react';
import './roverselector.css';

function RoverSelector({ roversActive, rovers, roverSelection, onRoverSelection }) {
    const onClick = (roverName) => {
        onRoverSelection({ ...roverSelection, [roverName]: !roverSelection[roverName] });
    };

    return (
        <div className="row" style={{ textAlign: "center" }}>
        {rovers.map((rover) => <div data-testid={`rover-div-${rover.name.toLowerCase()}`} className={`col-4 ${roversActive[rover.name.toLowerCase()] ? '' : 'RoverSelector-inactive'}`} key={rover.name}>
            <strong>{rover.name}</strong><br/>
            <small>{rover.activePeriod[0]} - {rover.activePeriod[1]}</small>
            <p>
                <input type="checkbox" data-testid="rover-selected" checked={roverSelection[rover.name.toLowerCase()]} onChange={() => { onClick(rover.name.toLowerCase()) }}></input>
            </p>
        </div>)}
        </div>
    );
}

export default RoverSelector;