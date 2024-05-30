import { Box,Button, Typography,styled } from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';

const Wrapper = styled(Box)`
display:flex;
margin 0 3% 0 auto;
& > button , & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
}

`

const Container = styled( Box)`
display:flex;
`


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: inherit;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 0px;
    overflow:auto;
    outline: 1px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
    };
    z-index: 1;
    `,
  );
  
  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    `,
  );
  
  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 2px;
    color:#2874f0 ;
    transition: all 150ms ease;
    cursor: pointer;
   background:#fff;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    
    box-shadow: none;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
  ); 
  const MenuUButton = styled(MenuButton)`
  background:#2874f0;
  color:white;
  border:none;
  &:hover{
background:#2874f0;
border:none;
  }`
const CustomButtons = ()=>
{
    const createHandleMenuClick = (menuItem) => {
        return () => {
          console.log(`Clicked on ${menuItem}`);
        };
      };
    return(
        <Wrapper>
            <Dropdown>
      <MenuButton>Login</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('My Profile')}>My Profile
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick('Flipkart Plus Zone')}>
        Flipkart Plus Zone
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick('Orders')}>Orders </MenuItem>
        <MenuItem onClick={createHandleMenuClick('Wishlist')}>Wishlist</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Rewards')}>Rewards</MenuItem>
        <MenuItem onClick={createHandleMenuClick('GiftCard')}>GiftCard</MenuItem>
      </Menu>
    </Dropdown>
<Typography style={{ marginTop: 6 , width: 135,paddingTop:4 , fontWeight:600}}> Become a Seller </Typography>

<Dropdown>
      <MenuUButton>More</MenuUButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('Notification Prefrences')}>Notification Prefrences
        </MenuItem>
        
        <MenuItem onClick={createHandleMenuClick('24x7')}>24x7 Customer Care </MenuItem>
        <MenuItem onClick={createHandleMenuClick('Advertise')}>Advertise</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Download')}>Download App</MenuItem>
       
      </Menu>
    </Dropdown>

<Container >
    <ShoppingCart/>
    <Typography>Cart </Typography>
</Container>
        </Wrapper>
    )
}

export default CustomButtons;