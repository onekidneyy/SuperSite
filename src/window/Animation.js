import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import '../window/WindowStyles.css';
import '../styles/FolderView.css';

const Animation = () => {
    const media = [
        { name: 'God Candle', url: '/assets/videos/GodCandle.mp4', type: 'video' },
        { name: 'Hot Chick', url: '/assets/videos/HotChick.mp4', type: 'video' },
        { name: 'Money Printer', url: '/assets/videos/MoneyPrinter.mp4', type: 'video' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (mediaItem) => {
        setModalContent(mediaItem);
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
                    {media.map((item, index) => (
                        <div key={index} className="folder" onClick={() => openModal(item)}>
                            <video className="file-icon" src={item.url} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {modalIsOpen && (
                <ModalWindow onClose={closeModal} title={modalContent.name}>
                    <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src={modalContent.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </ModalWindow>
            )}
        </div>
    );
};

export default Animation;







