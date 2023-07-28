import styled from 'styled-components';

const Container=styled.div`
height:40px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content : center ;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
    Flat ₹250 Off  + FREE SHIPPING & MORE EXCITING OFFERS 
    </Container>
  );
}

export default Announcement;
