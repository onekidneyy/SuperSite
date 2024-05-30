import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

const Meme = () => {
    const folders = [
        {
            name: 'SuperS Logos',
            content: [
                { name: 'SuperS Logo 1', url: '/assets/SuperSWatermarks/SuperSWatermark01.png' },
                { name: 'SuperS Logo 2', url: '/assets/SuperSWatermarks/SuperSWatermark02.png' },
                { name: 'SuperS Logo 3', url: '/assets/SuperSWatermarks/SuperSWatermark03.png' },
                { name: 'SuperS Logo 4', url: '/assets/SuperSWatermarks/SuperSWatermark04.png' },
                { name: 'SuperS Logo 5', url: '/assets/SuperSWatermarks/SuperSWatermark05.png' },
            ]
        },
        {
            name: 'Super Steve',
            content: [
                { name: 'Super Steve 1', url: '/assets/SuperSteve/SuperS_01.png' },
                { name: 'Super Steve 2', url: '/assets/SuperSteve/SuperS_02.png' },
                { name: 'Super Steve 3', url: '/assets/SuperSteve/SuperS_03.png' },
                { name: 'Super Steve 4', url: '/assets/SuperSteve/SuperS_04.png' },
                { name: 'Super Steve 5', url: '/assets/SuperSteve/SuperS_05.png' },
                { name: 'Super Steve 6', url: '/assets/SuperSteve/SuperS_06.png' },
                { name: 'Super Steve 7', url: '/assets/SuperSteve/SuperS_07.png' },
                { name: 'Super Steve 8', url: '/assets/SuperSteve/SuperS_08.png' },
                { name: 'Super Steve 9', url: '/assets/SuperSteve/SuperS_09.png' },
                { name: 'Super Steve 10', url: '/assets/SuperSteve/SuperS_10.png' },
                { name: 'Super Steve 11', url: '/assets/SuperSteve/SuperS_11.png' },
                { name: 'Super Steve 12', url: '/assets/SuperSteve/SuperS_12.png' },
                { name: 'Super Steve 13', url: '/assets/SuperSteve/SuperS_13.png' },
                { name: 'Super Steve 14', url: '/assets/SuperSteve/SuperS_14.png' },
                { name: 'Super Steve 15', url: '/assets/SuperSteve/SuperS_15.png' },
                { name: 'Super Steve 16', url: '/assets/SuperSteve/SuperS_16.png' },
                { name: 'Super Steve 17', url: '/assets/SuperSteve/SuperS_17.png' },
                { name: 'Super Steve 18', url: '/assets/SuperSteve/SuperS_18.png' },
                { name: 'Super Steve 19', url: '/assets/SuperSteve/SuperS_19.png' },
                { name: 'Super Steve 20', url: '/assets/SuperSteve/SuperS_20.png' },
                { name: 'Super Steve 21', url: '/assets/SuperSteve/SuperS_21.png' },
                { name: 'Super Steve 22', url: '/assets/SuperSteve/SuperS_22.png' },
                { name: 'Super Steve 23', url: '/assets/SuperSteve/SuperS_23.png' },
                { name: 'Super Steve 24', url: '/assets/SuperSteve/SuperS_24.png' },
                { name: 'Super Steve 25', url: '/assets/SuperSteve/SuperS_25.png' },
                { name: 'Super Steve 26', url: '/assets/SuperSteve/SuperS_26.png' },
                { name: 'Super Steve 27', url: '/assets/SuperSteve/SuperS_27.png' },
                { name: 'Super Steve 28', url: '/assets/SuperSteve/SuperS_28.png' },
            ]
        },
        {
            name: 'Super Steve Memes',
            content: [
                { name: 'Bullish', url: '/assets/SuperSteveMemes/bullish.png' },
                { name: 'Eat The Dip', url: '/assets/SuperSteveMemes/eatthedip.png' },
                { name: 'Faded Back To The Future', url: '/assets/SuperSteveMemes/fadedbacktothefuture.png' },
                { name: 'Faded China', url: '/assets/SuperSteveMemes/fadedchina.png' },
                { name: 'Faded Goodfellas', url: '/assets/SuperSteveMemes/fadedgoodfellas.png' },
                { name: 'Faded Mortal Kombat', url: '/assets/SuperSteveMemes/fadedmortalkombat.png' },
                { name: 'Faded Robocop', url: '/assets/SuperSteveMemes/fadedrobocop.png' },
                { name: 'Faded Scanners', url: '/assets/SuperSteveMemes/fadedscanners.png' },
                { name: 'Fireworks', url: '/assets/SuperSteveMemes/fireworkswatermark.png' },
                { name: 'Get In Loser', url: '/assets/SuperSteveMemes/getin.png' },
                { name: 'Leo Point', url: '/assets/SuperSteveMemes/leopoint.png' },
                { name: 'Matthew Mcconaughey', url: '/assets/SuperSteveMemes/matthewmcconaughey.png' },
                { name: 'Paper Hands', url: '/assets/SuperSteveMemes/paperhands.png' },
                { name: 'Smoke Couch Ticker', url: '/assets/SuperSteveMemes/smokecouchticker.png' },
            ]
        },
        {
            name: 'SuperS AI',
            content: [
                { name: 'SuperS AI 1', url: '/assets/SuperSAi/SuperSAi1.mp4' },
                { name: 'SuperS AI 2', url: '/assets/SuperSAi/SuperSAi2.mp4' },
                { name: 'SuperS AI 3', url: '/assets/SuperSAi/SuperSAi3.mp4' },
                { name: 'SuperS AI 4', url: '/assets/SuperSAi/SuperSAi4.mp4' },
                { name: 'SuperS AI 5', url: '/assets/SuperSAi/SuperSAi5.mp4' },
                { name: 'SuperS AI 6', url: '/assets/SuperSAi/SuperSAi6.mp4' },
                { name: 'SuperS AI 7', url: '/assets/SuperSAi/SuperSAi7.mp4' },
                { name: 'SuperS AI 8', url: '/assets/SuperSAi/SuperSAi8.mp4' },
                { name: 'SuperS AI 9', url: '/assets/SuperSAi/SuperSAi9.mp4' },
                { name: 'SuperS AI 10', url: '/assets/SuperSAi/SuperSAi10.mp4' },
                { name: 'SuperS AI 11', url: '/assets/SuperSAi/SuperSAi11.mp4' },
                { name: 'SuperS AI 12', url: '/assets/SuperSAi/SuperSAi12.mp4' },
                { name: 'SuperS AI 13', url: '/assets/SuperSAi/SuperSAi13.mp4' },
                { name: 'SuperS AI 14', url: '/assets/SuperSAi/SuperSAi14.mp4' },
                { name: 'SuperS AI 15', url: '/assets/SuperSAi/SuperSAi15.mp4' },
                { name: 'SuperS AI 16', url: '/assets/SuperSAi/SuperSAi16.mp4' },
                { name: 'SuperS AI 17', url: '/assets/SuperSAi/SuperSAi17.mp4' },
                { name: 'SuperS AI 18', url: '/assets/SuperSAi/SuperSAi18.mp4' },
                { name: 'SuperS AI 19', url: '/assets/SuperSAi/SuperSAi19.mp4' },
                // Add more videos as needed
            ]
        },
        // Add more folders as needed
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [currentFolder, setCurrentFolder] = useState(null);

    const openModal = (file) => {
        setModalContent(file);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    const openFolder = (folder) => {
        setCurrentFolder(folder);
    };

    const goBack = () => {
        setCurrentFolder(null);
    };

    return (
        <div>
            <div className="window-content">
                {currentFolder ? (
                    <div>
                        <button className="image-button" onClick={goBack}>Back</button>
                        <ul>
                            {currentFolder.content.map((file, index) => (
                                <li key={index}>
                                    <button className="image-button" onClick={() => openModal(file)}>
                                        {file.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <ul>
                        {folders.map((folder, index) => (
                            <li key={index}>
                                <button className="image-button" onClick={() => openFolder(folder)}>
                                    {folder.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {modalIsOpen && (
                <ModalWindow onClose={closeModal} title={modalContent.name}>
                    {modalContent.url.endsWith('.mp4') ? (
                        <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                            <source src={modalContent.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={modalContent.url} alt={modalContent.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    )}
                </ModalWindow>
            )}
        </div>
    );
};

export default Meme;


