import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import './WindowStyles.css';

const ModalWindow = ({ children, onClose, title, index }) => {
    const [dimensions, setDimensions] = useState({ width: 500, height: 300 });

    const calculateCenterPosition = () => {
        const offset = index * 30; // Change this value to adjust the offset between modals
        const x = (window.innerWidth - dimensions.width) / 2 + offset;
        const y = (window.innerHeight - dimensions.height) / 2 + offset;
        return { x, y };
    };

    const [position, setPosition] = useState(calculateCenterPosition());

    useEffect(() => {
        setPosition(calculateCenterPosition());
    }, [dimensions]);

    useEffect(() => {
        const handleResize = () => {
            setPosition(calculateCenterPosition());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Rnd
            size={dimensions}
            position={position}
            onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
                setDimensions({
                    width: ref.style.width,
                    height: ref.style.height,
                });
                setPosition(position);
            }}
            minWidth={300}
            minHeight={200}
            bounds="window"
        >
            <div className="window">
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
        </Rnd>
    );
};

export default ModalWindow;
