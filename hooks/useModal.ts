import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("click");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("close");
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
