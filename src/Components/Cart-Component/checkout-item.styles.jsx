import styled from 'styled-components';

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BATCH = styled.span`
  width: 25%;
  padding: 0 1.2%;
`;

export const Name = styled(BATCH)``;

export const Price = styled(BATCH)``;

export const Quantity = styled(BATCH)`
  display: flex;
`;

export const Arrow = styled.span`
  cursor: pointer;
  padding: 0 6%;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Remove = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;


/*
.cart-item-container {


  .image-container {

  }
  .name,
  .quantity,
  .price {

  }

  .quantity {
  

    .arrow {

    }

    .value {
    }
  }

  .remove-button {

  }
}
*/