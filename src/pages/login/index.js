import React, { useState } from 'react';
import styled from "styled-components";
import foodBgImg from "../../../public/food_img.jpeg"



const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/food_img.jpeg') center/cover no-repeat;
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

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.a`
  color: #666;
  text-decoration: none;
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

const Login = () => {
  const [credential, setCredential] = useState({username: "", password: ""})
  const [data, setData] = useState("")

  const handleCredential = (e) => {
    // e.preventDefault()
    setCredential({...credential,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setData(credential)
    setCredential({...credential,username: "", password:""})
  }

  console.log(data,"cred::")

  return (
    <LoginContainer image={foodBgImg}>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input value={credential.username} onChange={handleCredential} type="text" id="username" placeholder="Type your username" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input value={credential.password} onChange={handleCredential} type="password" id="password" placeholder="Type your password" />
          </InputGroup>
          <ForgotPassword>
            <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
          </ForgotPassword>
          <div >
          <LoginButton type="submit">LOGIN</LoginButton>
          <LoginButton type="submit">Signup</LoginButton>
          <LoginButton type="submit">New User</LoginButton>
          </div>
        </form>
        {/* <p>Or Sign Up Using</p>
        <SocialLogin>
          <SocialButton className="facebook">Facebook</SocialButton>
          <SocialButton className="twitter">Twitter</SocialButton>
          <SocialButton className="google">Google</SocialButton>
        </SocialLogin>
        <p>Or Sign Up Using <SignupLink href="#">SIGN UP</SignupLink></p> */}
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;