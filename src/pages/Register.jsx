import styled from "styled-components";
import { mobile } from "../Responsive";
import { registerUser } from "../redux/apiCalls";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Container=styled.div`
width: 100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255, 255,255,0.5)
), 
 url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
  center;
  background-size:cover;
  display: flex;
  align-items:center;
  justify-content: center;
`;
const Wrapper=styled.div`
padding: 20px;
width:40%;
background-color:white;
${mobile ({width: "75%"})}

`;
const Form=styled.form`
display: flex;
flex-wrap:wrap;
`;
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input=styled.input`
display: flex;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px; 
`;
const Button=styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color:teal;
color: white;
cursor:pointer;
`;

export default function Register(){
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const dispatch = useDispatch()
    function register(){
        if(password !== cpassword){
            alert("password not matched")
        }
        else{
            const user = {
                username,
                email,
                password
            }
            dispatch(registerUser(user))
        }
      }
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                {/* <Input placeholder="name"/>
                <Input placeholder="last name"/> */}
                <Input placeholder="username"
                onChange={(e)=>{setusername(e.target.value)}}
                />
                <Input placeholder="email"
                onChange={(e)=>{setemail(e.target.value)}}
                />
                <Input placeholder="password"
                 onChange={(e)=>{setpassword(e.target.value)}}
                />
                <Input placeholder="confirm password"
                onChange={(e)=>{setcpassword(e.target.value)}}
                />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>

                <Button onClick={register}>CREATE</Button>
                
            </Form>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
        </Wrapper>
    </Container>
  )
}