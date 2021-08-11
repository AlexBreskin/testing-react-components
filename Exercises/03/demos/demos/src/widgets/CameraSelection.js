import React from 'react';

const CameraSelection = ({cameras, camera, onCameraSelected}) => (
    <div className="row">
    <div className="col-12">
        <select value={camera} className="form-control" onChange={(e)=> {onCameraSelected(e.target.value);}}>
        {Object.keys(cameras).map((key) => 
            <option value={key} key={key}>{cameras[key]}</option>)}
        </select>
    </div>
    </div>
);

export default CameraSelection;