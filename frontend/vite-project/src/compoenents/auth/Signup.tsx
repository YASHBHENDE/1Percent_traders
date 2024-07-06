import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ShadcnCompoenent/ui/card";
import { Input } from "@/ShadcnCompoenent/ui/input";
import { Button } from "@/ShadcnCompoenent/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CardWithForm() {
  const [Username,setusername] = React.useState('')
  const [email,setemail] = React.useState('')
  const [password,setpassword] = React.useState('')

  const navigate = useNavigate()


  const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <>
      <div style={{ marginTop: '18vh' }}>
        <center>
          <Card className="w-[500px] h-[400px]" style={{ padding: '5vh' }}>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
            </CardHeader>

            <CardContent>
              <Input placeholder="Username"  onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setusername(e.target.value)}}/>
              <div style={{ marginTop: '3vh' }}>
                <Input type="email" placeholder="Email" onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setemail(e.target.value)}}/>
              </div>
              <div style={{ marginTop: '3vh' }}>
                <Input type="password" placeholder="Password"  onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setpassword(e.target.value)}} />
              </div>
            </CardContent>

            <CardFooter>
              <Button onClick={async() => { 
                if(Username == '' || email=="" || password ==''){
                  alert('all the fields are required')
                }else if(!validateEmail(email)){
                  alert('invalid email')
                }
                else{
                    const response  = await axios.post('http://localhost:3000/auth/signup',{
                      username:Username,
                      email:email,
                      password:password
                    })

                    if(response.data.UserExists){

                      alert("username already exists, please sign in")

                    }else if(response.data.usernameExists){

                      alert("Username already exists,please try another username")

                    }else if(response.data.msg){

                      alert(response.data.msg)

                    }
                    else{
                      const token = response.data.token

                      localStorage.setItem('token',"bearer "+token)
                      
                      navigate('/home')
                      window.location.reload()
                  }
               
              }}}>Sign up</Button>
              <Button variant="link" onClick={()=>{navigate('/signin')}}>already have an account? Signin</Button>
            </CardFooter>
          </Card>
        </center>
      </div>
    </>
  );
}

export default function Signup() {
  return (
    <>
      <CardWithForm />
    </>
  );
}
