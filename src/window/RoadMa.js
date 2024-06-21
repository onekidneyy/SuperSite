import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import '../window/WindowStyles.css';
import '../styles/FolderView.css';

const RoadMa = () => {
    const images = [
        { name: 'RoadMap Page 1', url: '/assets/RoadMap/RoadMap1.png' },
        { name: 'RoadMap Page 2', url: '/assets/RoadMap/RoadMap2.png' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (image) => {
        setModalContent(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    return (
        <div>
            <div className="window-content">
                <div className="folder-view">
                    {images.map((image, index) => (
                        <div key={index} className="folder" onClick={() => openModal(image)} onTouchStart={() => openModal(image)}>
                            <img src={image.url} alt={image.name} className="file-icon" />
                            <p>{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {modalIsOpen && (
                <ModalWindow onClose={closeModal} title={modalContent.name}>
                    <img src={modalContent.url} alt={modalContent.name} style={{ maxWidth: '100%', height: 'auto' }} />
                </ModalWindow>
            )}
        </div>
    );
};

export default RoadMa;


