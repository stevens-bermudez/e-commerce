import { useState, useRef } from 'react';

const useApp = () => {
  const [amountValue, setAmountValue] = useState(0);
  const [currentImg, setCurrentImg] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const menuRef = useRef(null);
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);
  const mainThumbnailRef = useRef(null);
  const mainThumbnailLightBoxRef = useRef(null);
  const closeLightboxBtnRef = useRef(null);
  const lightboxRef = useRef(null);
  const addBtnRef = useRef(null);
  const indicatorRef = useRef(null);
  const wrpRef = useRef(null);

  const handlePlus = () => {
    setAmountValue(amountValue + 1);
  };

  const handleMinus = () => {
    if (amountValue > 0) {
      setAmountValue(amountValue - 1);
    }
  };

  const nextImage = () => {
    setCurrentImg(currentImg === 4 ? 1 : currentImg + 1);
  };

  const prevImage = () => {
    setCurrentImg(currentImg === 1 ? 4 : currentImg - 1);
  };

  const addItem = () => {
    if (amountValue > 0) {
      const newItem = {
        id: cartItems.length + 1,
        amount: amountValue
      };
      setCartItems([...cartItems, newItem]);
      setAmountValue(0); // Reset amount value after adding item
    }
  };

  const deleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return {
    amountValue,
    setAmountValue,
    currentImg,
    setCurrentImg,
    cartItems,
    setCartItems,
    lightboxOpen,
    setLightboxOpen,
    menuRef,
    closeBtnRef,
    overlayRef,
    mainThumbnailRef,
    mainThumbnailLightBoxRef,
    closeLightboxBtnRef,
    lightboxRef,
    addBtnRef,
    indicatorRef,
    wrpRef,
    handlePlus,
    handleMinus,
    nextImage,
    prevImage,
    addItem,
    deleteItem,
    openLightbox,
    closeLightbox
  };
};

export default useApp;
