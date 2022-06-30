import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 30px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CountBarContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.746);
  width: max-content;
  height: 40px;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 200px;
`;

export const CountBar = styled.span`
  padding: 0 20px;
  font-size: xx-large;
`;

export const ToPoint = styled.span`
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 16%;
  font-size: x-large;
`;








/*
.products-container {

}
.product-card-container {


  .count-bar-container{

    }
    .to-point{

  }



  .footer {


    .name {

    }

    .price {

    }
  }
}
*/