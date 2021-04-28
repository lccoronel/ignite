import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
  const dispacth = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispacth(addProductToCartRequest(product));
  }, [dispacth, product]);
  
  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <strong>{product.price}</strong> {" - "}

      <button 
        type="button" 
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  );
}

export default CatalogItem;