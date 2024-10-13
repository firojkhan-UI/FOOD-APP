import React, { useState } from 'react';
import styled from "styled-components";


const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.facebook {
    background-color: #3b5998;
  }
  
  &.twitter {
    background-color: #1da1f2;
  }
  
  &.google {
    background-color: #db4437;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const SignupLink = styled.a`
  color: #333;
`;

const Signup = () => {
    const [credential, setCredential] = useState({
        name:"",
        email:"",
        password:"",
        address:""
    })

    const [data, setData] = useState("")

    const handleCredential = (e) => {
      setCredential({...credential,[e.target.id]:e.target.value})
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      setData(credential)
      setCredential({...credential,username: "", password:""})
    }
  
    console.log(data,"cred::")

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Signup</Title>
        <form>
          <InputGroup>
            <Label htmlFor="username">Name</Label>
            <Input onChange={handleCredential} type="text" id="name" placeholder="Type your username" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="username">Email</Label>
            <Input onChange={handleCredential} type="text" id="email" placeholder="Type your username" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input onChange={handleCredential} type="password" id="password" placeholder="Type your password" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="username">Address</Label>
            <Input onChange={handleCredential} type="text" id="address" placeholder="Type your username" />
          </InputGroup>
         <div>
         <LoginButton type="submit">Signup
         </LoginButton>
         <LoginButton type="submit">Already user
         </LoginButton>
         </div>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Signup;