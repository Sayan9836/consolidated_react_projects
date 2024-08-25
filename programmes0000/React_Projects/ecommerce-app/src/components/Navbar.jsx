import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Container = styled.div`
//   background: black;
  height:60px
`;
const Wrapper = styled.div`
   padding:10px 20px;
    display:flex;
    align-items:center
    justify-content:space-between;
`

const Left = styled.div`
  flex:1;
  display:flex
  align-items:center
`;
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
`;
const SearchContainer = styled.div`
 border:1px solid lightgray;
 display:flex;
 align-items:center;
 margin-left: 25px;
 padding:5px;
`
const Input = styled.input`
border:none;
`;
const Center = styled.div`
  flex:1;
  text-align:center;
`;
const Logo = styled.div`
  font-weight:bold;
 
`;
const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;

const MenuItem = styled.div`
   font-size:14px;
   cursor:pointer;
   margin-Left:25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>SAYAN</Logo></Center>

                <Right>
                    <MenuItem>Resister</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

