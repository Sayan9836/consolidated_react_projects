import styled from 'styled-components'
import React from 'react'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content:center;
position:relative;
background-color:#f5fbfd;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
 width:100%
 height:100%
 position:absolute;
 
`;

const Icon = styled.div`

`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                    <FavoriteIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
