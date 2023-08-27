import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeModal, setActiveModal] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenModal = val => {
        setActiveModal(val);
        setShowModal(!showModal);
        if (!showModal) {
            setIsLoading(false);
        }
    };
    
    const handleCloseModal = () => {
        setShowModal(!showModal);
        setActiveModal('');
    };

    const toggleLoader = () => {
        setIsLoading(!isLoading);
    }

    return {
        showModal, activeModal, handleOpenModal, handleCloseModal, isLoading, toggleLoader
    };
};

export default useModal;
