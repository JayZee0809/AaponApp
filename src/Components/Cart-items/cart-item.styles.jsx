import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 10px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled(CartItemContainer)`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  p {
    font-size: 16px;
    margin-bottom: 2px;
    margin-top: 2px;
  }
`;







/*
.cart-item-container {


  .item-details {


    .name {

    }
  }
}
*/