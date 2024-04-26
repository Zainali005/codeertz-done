import React from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product } from '../../redux/features/cart-slice';
import ReviewForm from '../forms/review-form';
import RelatedProducts from './related-products';


const ProductDetailsArea = ({ product }) => {
  const { img, title, sm_desc, rating, price, customer_reviews, old_price, models, details_text_1, 
  details_text_2, additional_info, accordion_items,category } = product || {};
  const dispatch = useDispatch();
  const [reviewValue,setReviewValue] = useState(0);
  // reviews
  const {reviews} = useSelector(state => state.products);
  // handleReviewChange
  const handleReviewChange = (value) => {
    setReviewValue(value);
  }
  return (
    <>
      <div className="tp-product-details-area pt-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="tp-product-img">
                <img className='w-100' src={img} alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="productdetails">
                <div className="productdetails__content">
                  <h3 className="pd-title">{title}</h3>
                  <p>{sm_desc}</p>
                </div>
                <div className="productdetails__ratting">
                  <Rating
                    fullSymbol={<i className="fas fa-star"></i>}
                    emptySymbol={<i className="fal fa-star"></i>}
                    initialRating={rating}
                    readonly
                  />
                  <span>({customer_reviews} customer review)</span>
                  <h4>${price} {old_price && <del>/{old_price}</del>}</h4>
                </div>
                <div className="productdetails__model">
                  <h5>Model</h5>
                  {models && models.map((m, i) => <a key={i} href="#">{m}</a>)}
                </div>
                <div className="productdetails__button">
                  <button onClick={()=> dispatch(add_cart_product(product))} className="tp-btn-yellow mb-20 mr-20">Add to cart</button>
                  <button className="tp-btn-sm-sky">Buy now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="productdetails-tabs">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-12">
                  <div className="product-additional-tab">
                    <div className="pro-details-nav mb-40">
                      <ul className="nav nav-tabs pro-details-nav-btn" id="myTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-links active" id="home-tab-1" data-bs-toggle="tab" data-bs-target="#home-1" type="button" role="tab" aria-controls="home-1" aria-selected="true" tabIndex='-1'><span>Product Details</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-links" id="information-tab" data-bs-toggle="tab" data-bs-target="#additional-information" type="button" role="tab" aria-controls="additional-information" tabIndex='-1' aria-selected="false"><span>Additional Info</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-links" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false" tabIndex='-1'><span>Review (08)</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-links" id="size-chart-tab" data-bs-toggle="tab" data-bs-target="#chart" type="button" role="tab" aria-controls="chart" aria-selected="false" tabIndex='-1'><span>Faq</span></button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content tp-content-tab" id="myTabContent-2">
                      <div className="tab-para tab-pane fade show active" id="home-1" role="tabpanel" aria-labelledby="home-tab-1">
                        <p className="mb-30">{details_text_1}</p>
                        {details_text_2 && <p>{details_text_2}</p>}
                      </div>
                      <div className="tab-pane fade" id="additional-information" role="tabpanel"
                        aria-labelledby="information-tab">
                        <div className="product__details-info table-responsive">
                          <table className="table table-striped">
                            <tbody>
                              {additional_info && additional_info.map((info, i) => (
                                <tr key={i}>
                                  <td className="add-info">{info.info}</td>
                                  {Array.isArray(info.list) ? <td className="add-info-list">
                                    {info.list.join(', ')}</td> :
                                    <td className="add-info-list">{info.list}</td>}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <div className="product-details-review">
                          <h3 className="tp-comments-title mb-35">3 reviews for “Wide Cotton Tunic extreme hammer”</h3>
                          <div className="latest-comments mb-55">
                            <ul>
                              {reviews.map((review, i) => (
                                <li key={i}>
                                  <div className="comments-box d-flex">
                                    <div className="comments-avatar mr-25">
                                      <img src={review.img} alt="" />
                                    </div>
                                    <div className="comments-text">
                                      <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                        <div className="avatar-name">
                                          <b>{review.name}</b>
                                          <div className="comments-date mb-20">
                                            <span>{review.date}</span>
                                          </div>
                                        </div>
                                        <div className="user-rating">
                                          <ul>
                                            <li>
                                              <Rating
                                                fullSymbol={<i className="fas fa-star"></i>}
                                                emptySymbol={<i className="fal fa-star"></i>}
                                                initialRating={review.rating}
                                                readonly
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <p className="m-0">{review.review}</p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="product-details-comment pb-100">
                            <div className="comment-title mb-20">
                              <h3>Add a review</h3>
                              <p>Your email address will not be published. Required fields are marked*</p>
                            </div>
                            <div className="comment-rating mb-20 d-flex">
                              <span>Overall ratings</span>
                              <ul>
                                <li>
                                  <Rating
                                    fullSymbol={<i className="fas fa-star"></i>}
                                    emptySymbol={<i className="fal fa-star"></i>}
                                    onChange={handleReviewChange}
                                  />
                                </li>
                              </ul>
                            </div>
                            <div className="comment-input-box">
                              <ReviewForm reviewValue={reviewValue} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="chart" role="tabpanel" aria-labelledby="size-chart-tab">
                        <div className="tp-custom-accordio faq-accordio-border">
                          <div className="accordion" id="accordionExample">

                            {accordion_items.map((item, i) => {
                              const { id, show, title, desc } = item;
                              return <div key={id} className="accordion-items">
                                <h2 className="accordion-header" id={`heading-${id}`}>
                                  <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                                    aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                                    {title}
                                  </button>
                                </h2>
                                <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    {desc}
                                  </div>
                                </div>
                              </div>
                            })}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related products start */}
      <RelatedProducts category={category} title={title} />
      {/* related products end */}

    </>
  );
};

export default ProductDetailsArea;