import React from 'react';
import useApp from './useApp.jsx';

const App = () => {
  const {
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
  } = useApp();

  return (
    <div className="container">
      <nav>
        <div className="nav_container">
          <div className="nav_left-sec">
            <img
              src="./images/icon-menu.svg"
              id="menu-btn"
              alt="menu"
              className="hidden menu"
            />
            <img src="./images/logo.svg" alt="logo" className="nav_logo" />
            <div className="overlay" ref={overlayRef}></div>
            <ul className="nav_links" ref={menuRef}>
              <img
                src="./images/icon-close.svg"
                alt="close"
                className="close-btn hidden"
                ref={closeBtnRef}
              />
              <li className="nav_link">Collections</li>
              <li className="nav_link">Men</li>
              <li className="nav_link">Women</li>
              <li className="nav_link">About</li>
              <li className="nav_link">Contact</li>
            </ul>
          </div>
          <div className="nav_right-sec">
            <div className="cart-container">
              <button className="cart-btn" onClick={() => wrpRef.current.classList.toggle("invisible")}>
                <span className="indicator" ref={indicatorRef}>{cartItems.length}</span>
                <img src="./images/icon-cart.svg" alt="cart" className="cart" />
              </button>
              <div className="cart-wrp invisible" ref={wrpRef}>
                <p className="cart-heading">Cart</p>
                <div className="divider"></div>
                <div className={`cart-content ${cartItems.length ? '' : 'empty'}`}>
                  {cartItems.length ?
                    cartItems.map(item => (
                      <div key={item.id} className="product">
                        <div>
                          <img src={`./images/image-product-${currentImg}-thumbnail.jpg`} className="product-img" alt="product" />
                          <div className="product-info">
                            <p className="product-title">Fall Limited Edition Sneakers</p>
                            <p><span>$125.00</span> × <span className="number">{item.amount}</span> <b>$125.00</b></p>
                          </div>
                          <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                            <img src="./images/icon-delete.svg" alt="delete" />
                          </button>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                      </div>
                    )) :
                    <p>Your cart is empty</p>
                  }
                </div>
              </div>
            </div>
            <img src="./images/image-avatar.png" alt="avatar" className="avatar" />
          </div>
        </div>
      </nav>
      <main>
        <section className="thumbnails">
          <img
            src={`./images/image-product-${currentImg}.jpg`}
            alt="product"
            className="main-thumbnail invisible-mob"
            ref={mainThumbnailRef}
            onClick={openLightbox}
          />
          <div className="mobile-thumb hidden">
            <img
              src={`./images/image-product-${currentImg}.jpg`}
              className="thumb-mob"
              alt="product"
            />
            <button id="next" onClick={nextImage}>
              <img src="./images/icon-next.svg" alt="next" />
            </button>
            <button id="previous" onClick={prevImage}>
              <img src="./images/icon-previous.svg" alt="previos" />
            </button>
          </div>
          <div>
            <div className="preview">
              <img
                className="selected"
                src="./images/image-product-1-thumbnail.jpg"
                alt=""
                onClick={() => setCurrentImg(1)}
              />
              <img
                src="./images/image-product-2-thumbnail.jpg"
                alt=""
                onClick={() => setCurrentImg(2)}
              />
              <img
                src="./images/image-product-3-thumbnail.jpg"
                alt=""
                onClick={() => setCurrentImg(3)}
              />
              <img
                src="./images/image-product-4-thumbnail.jpg"
                alt=""
                onClick={() => setCurrentImg(4)}
              />
            </div>
          </div>
        </section>
        <section className="content">
          <p className="company">Sneaker Company</p>
          <h1 className="title">Fall Limited Edition Sneakers</h1>
          <p className="info">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="new-price">
              <p className="now">$125.00</p>
              <span>50%</span>
            </div>
            <p className="old-price">$250.00</p>
          </div>
          <div className="buttons">
            <div className="amount-btn">
              <button onClick={handleMinus}>-</button>
              <p className="amount">{amountValue}</p>
              <button onClick={handlePlus}>+</button>
            </div>
            <button className="add_btn" onClick={addItem} ref={addBtnRef}>
              <img src="./images/icon-cart.svg" alt="cart" />
              <span>Add to cart</span>
            </button>
          </div>
        </section>
      </main>
      <div className={`lightbox ${lightboxOpen ? '' : 'invisible'}`} ref={lightboxRef}>
        <div className="lightbox-container">
          <button className="close-lightbox" onClick={closeLightbox}>
            <img src="./images/icon-close.svg" alt="close" />
          </button>
          <img
            src={`./images/image-product-${currentImg}.jpg`}
            alt="product"
            className="main-thumbnail"
            ref={mainThumbnailLightBoxRef}
          />
          <button id="previous" className="nav-btn" onClick={prevImage}>
            <img src="./images/icon-previous.svg" alt="previous" />
          </button>
          <button id="next" className="nav-btn" onClick={nextImage}>
            <img src="./images/icon-next.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;