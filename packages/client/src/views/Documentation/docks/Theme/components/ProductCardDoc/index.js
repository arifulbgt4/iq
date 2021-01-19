import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';
import ProductCard from 'src/components/ProductCard';

const ProductCardDoc = () => {
  return (
    <DocCard title="Products Card" id="productcard">
      <div className="w-25">
        <ProductCard
          title="Product1"
          text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
      </div>
    </DocCard>
  );
};

export default ProductCardDoc;
