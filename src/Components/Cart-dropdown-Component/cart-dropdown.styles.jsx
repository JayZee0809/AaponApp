import styled from 'styled-components';

export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
    width: 100%;
  }
`;

export const EmptyMessege = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsDiv = styled.div`
  height: 240px;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background: transparent;  /*Optional: just make scrollbar invisible*/
  }
`;















/*
.cart-dropdown-container {


  .empty-message {

  }

  .cart-items {

  }


}
*/