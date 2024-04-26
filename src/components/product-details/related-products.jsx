import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { productsData } from '../../data';
import { add_cart_product, get_cart_products } from '../../redux/features/cart-slice';
import { add_wishlist, get_wishlist_products } from '../../redux/features/wishlist-slice';

const RelatedProducts = ({ category, title }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  const dispatch = useDispatch();
  const { cart_products } = useSelector(state => state.cart);
  const { wishlists } = useSelector(state => state.wishlist);

  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
  }, [dispatch])

  // handleAddProduct
  const handleAddProduct = (item) => {
    dispatch(add_cart_product(item))
  }

  // handle wishlist
  const handleWishlist = (item) => {
    const checkItem = wishlists.findIndex(i => i.id === item.id);
    if (checkItem >= 0) {
      dispatch(add_wishlist({
        changeType: 'remove',
        item
      }))
    }
    else {
      dispatch(add_wishlist({
        changeType: 'added',
        item
      }))
    }
  }

  // const words = title.split(' ');
  // const related__products = productsData.filter(data => words.some(s => 
  //  data.title.toLowerCase()
  // .includes(s.toLowerCase())))
  // console.log(related__products);

  const relatedItems = productsData.filter(item => item.category === category);

  return (
    <>
      <div className="tp-product-slider pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-product-slider-title">
                <h3 className="tp-product-slider-title pb-45">Realated Product</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {relatedItems.length <= 3 && <div className='row'>
                {relatedItems.map((item) => {
                  const { id, img, title, price, rating } = item;
                  const isCartSelected = cart_products.find(i => i.id === id);
                  const isWishlistSelected = wishlists.find(w => w.id === id)
                  return <div key={id} className="col-xl-4 col-md-6 col-12">
                    <div className="tpproduct text-center mb-30">
                      <div className="tpproduct__img">
                        <img className="w-100" src={img} alt="" />
                        <div className="tp-product-icon">
                          <button onClick={() => handleAddProduct(item)}>
                            <i className={isCartSelected ? 'fas fa-check' : "fal fa-shopping-basket"}></i>
                          </button>
                          <button onClick={() => handleWishlist(item)}>
                            <i className={isWishlistSelected ? 'fas fa-heart' : "fal fa-heart"}></i>
                          </button>
                        </div>
                      </div>
                      <div className="tpproduct__meta">
                        <h4 className="tp-product-title"><a href="#">{title}</a></h4>
                        <span>${price}</span>
                        <div className="product-rating">
                          <Rating
                            fullSymbol={<i className="fas fa-star"></i>}
                            emptySymbol={<i className="fal fa-star"></i>}
                            initialRating={rating}
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                })}
              </div>
              }
              <div className="tp-product-price-slider">
                {relatedItems.length > 3 && <Swiper
                  loop={sliderLoop}
                  slidesPerView={1}
                  spaceBetween={30}
                  className="swiper-container product-slider-active"
                  breakpoints={{
                    '1200': {
                      slidesPerView: 3,
                    },
                    '992': {
                      slidesPerView: 3,
                    },
                    '768': {
                      slidesPerView: 2,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    }
                  }}
                >
                  {relatedItems.map((item) => {
                    const { id, img, title, price, rating } = item;
                    const isCartSelected = cart_products.find(i => i.id === id);
                    const isWishlistSelected = wishlists.find(w => w.id === id)
                    return <SwiperSlide key={id}>
                      <div className="tpproduct text-center mb-30">
                        <div className="tpproduct__img">
                          <img className="w-100" src={img} alt="" />
                          <div className="tp-product-icon">
                            <button onClick={() => handleAddProduct(item)}>
                              <i className={isCartSelected ? 'fas fa-check' : "fal fa-shopping-basket"}></i>
                            </button>
                            <button onClick={() => handleWishlist(item)}>
                              <i className={isWishlistSelected ? 'fas fa-heart' : "fal fa-heart"}></i>
                            </button>
                          </div>
                        </div>
                        <div className="tpproduct__meta">
                          <h4 className="tp-product-title"><a href="#">{title}</a></h4>
                          <span>${price}</span>
                          <div className="product-rating">
                            <Rating
                              fullSymbol={<i className="fas fa-star"></i>}
                              emptySymbol={<i className="fal fa-star"></i>}
                              initialRating={rating}
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                </Swiper>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;