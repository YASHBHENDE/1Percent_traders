import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CardWithForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const navigate = useNavigate();

  const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignIn = async () => {
    if(email == '' || password ==''){
      alert('all fields are required')
    }else if(!validateEmail(email)){
      alert("invalid email")
    }else{
    try {
      const response = await axios.post('http://localhost:3000/auth/signin', {
       email:email,
        password:password
      });

      if(response.data.msg){

        alert(response.data.msg)

      }else{
        const token = response.data.token;

        localStorage.setItem('token', "bearer "+token);
      

        navigate('/home'); // Redirect to dashboard or any other page after successful login
        window.location.reload()
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show error message)
    }}
  };

  return (
    <>
      <div style={{ marginTop: '18vh' }}>
        <center>
          <Card className="w-[500px] h-[400px]" style={{ padding: '5vh' }}>
            <CardHeader>
              <CardTitle>Log in</CardTitle>
            </CardHeader>

            <CardContent>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} 
                />
              </div>
              <div style={{ marginTop: '3vh' }}>
                <Input 
                  type="password" 
                  placeholder="Password" 
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)} 
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button onClick={handleSignIn}>Sign in</Button>
              <Button variant="link" onClick={() => navigate('/signup')}>
                Don't have an account? Sign up
              </Button>
            </CardFooter>
          </Card>
        </center>
      </div>
    </>
  );
}

export default function Signin() {
  return (
    <>
      <CardWithForm />
    </>
  );
}
