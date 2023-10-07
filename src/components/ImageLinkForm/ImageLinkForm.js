import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className="fs-3 text-center  text-white">
                {`This Magic Brain will detect faces in your pictures. Give it a try.`}
            </p>
            <div className="d-flex justify-content-center">
                <div className="p-4 backgr rounded-4 shadow-lg input-group">
                    <input className="fs-4 p-2 center col-8 form-control focus-ring focus-ring-none z-0" type="text" onChange={onInputChange} placeholder="Image URL" />
                    <button className="fs-4 col-4 btn btn-color" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;