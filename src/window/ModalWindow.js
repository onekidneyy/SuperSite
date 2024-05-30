import React from 'react';
import './WindowStyles.css';

const ModalWindow = ({ children, onClose, title }) => (
    <div className="modal-overlay">
        <div className="modal-window window">
            <div className="title-bar">
                <div className="title-bar-text">{title}</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" className="close-button" onClick={onClose}>X</button>
                </div>
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    </div>
);

export default ModalWindow;








