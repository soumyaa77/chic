import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container=styled.div`
display: flex;
${mobile ({flexDirection: "column"})}

`;
const Left=styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;
`;
const Logo=styled.h1``;

const Desc=styled.p`
margin: 20px 0px;
`;

const SocialContainer=styled.div`
display: flex;
`;

const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color: #${props=> props.color};
display: flex;
align-items:center;
justify-content: center;
margin-right:20px;
`;

const Center=styled.div`
flex:1;
padding: 20px;
${mobile ({display: "none"})}

`;

const Title =styled.h3`
margin-bottom:30px;

`;
const List=styled.ul`
margin:0;
padding:0;
list-style-type: style none;
display: flex;
flex-wrap:wrap;
`;
const ListItem=styled.li`
width: 50%;
margin-bottom:10px;
`;

const Right=styled.div`
flex:1;
padding: 20px;
${mobile ({backgroundColor: "#fff8f8"})}

`;

const ContactItem= styled.div`
display: flex;
margin-bottom:20px;
align-items:center;
`;

const Payment=styled.img`
width: 50%;
`;


const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>CHIC.</Logo>
        <Desc>With the trendiest, freshest, and most unique styles from across 
        India and the world, CHIC invites you to express your personal style fearlessly, 
        and with a confidence and optimism that cannot be easily shaken.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
       </Left>
       <Center>
        <Title>
            Useful Links
        </Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and Conditions</ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Policies</ListItem>
        </List>
       </Center>
       <Right>
         <Title>
         In case of any concern, Contact Us
         </Title>
         <ContactItem> <Room style={{marginRight:"10px"}}/>
         Buildings Alyssa, Begonia and Clover situated in Embassy Tech Village, BHEL, Bhopal– 462022, India.
         </ContactItem>
         <ContactItem> <Phone  style={{marginRight:"10px"}}/>
         +1 234 56 78
         </ContactItem>
         <ContactItem><MailOutline  style={{marginRight:"10px"}}/>
         contact@chic.co
         </ContactItem>
         <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRlL4g3U02x2aeO5U0FoLoa8ohrUcHxgGYA&usqp=CAU" />
       </Right>
    </Container>
  );
}

export default Footer;
