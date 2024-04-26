import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProductDetailsArea from './product-details-area';


const ProductsDetails = ({product}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={product?.title ? product?.title : 'Product Details'} />
      <ProductDetailsArea product={product}/>
      <FooterThree />
    </Wrapper>
  );
};

export default ProductsDetails;