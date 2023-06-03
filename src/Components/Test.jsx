import React, { useState } from 'react';
import Modal from 'react-modal';

// Установка корневого элемента модального окна в DOM
Modal.setAppElement('#root');

const ExampleComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalCount, setModalCount] = useState(0);

    const openModal = () => {
        setIsOpen(true);
        setModalCount(prevCount => prevCount + 1);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Пример модального окна"
            >
                <h2>Модальное окно #{modalCount}</h2>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
};

export default ExampleComponent;
