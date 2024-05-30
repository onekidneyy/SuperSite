import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

const Animation = () => {
    const media = [
        { name: 'God Candle', url: '/assets/videos/GodCandle.mp4', type: 'video' },
        { name: 'Hot Chick', url: '/assets/videos/HotChick.mp4', type: 'video' },

        // Add more media as needed
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
                <ul>
                    {media.map((item, index) => (
                        <li key={index}>
                            <button className="media-button" onClick={() => openModal(item)}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {modalIsOpen && (
                <ModalWindow onClose={closeModal} title={modalContent.name}>
                    {modalContent.type === 'image' ? (
                        <img src={modalContent.url} alt={modalContent.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    ) : (
                        <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                            <source src={modalContent.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </ModalWindow>
            )}
        </div>
    );
};

export default Animation;






