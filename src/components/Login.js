import React from 'react'
import {Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid , Link, Paper, TextField, Typography}  from '@material-ui/core'
import Users from './Users'
import { useNavigate } from 'react-router-dom'
// import LockRoundedIcon from '@mui/icons-material/LockRounded';

const  Login = ()  => {
    
  const navigate = useNavigate();
  // const submit = () =>{
  //   <Users />
  // }

  const clicked = () =>{
    <Link to = "users" />
  }
  
  return (
    //   outer grid
   <Grid  >        
    <Paper evaluation = {20} className = "paperStyling">
        
    {/* inner grid for centering */}
    <Grid align = 'center'>
        <Avatar className='avatarStyle'>
            {/* <LockRoundedIcon /> */}     


        </Avatar>
        <h3>Sign In</h3>
        {/* USERNAME */}
        </Grid>
        <TextField 
            id="username"
            label="Username" 
            variant="standard" 
            name='username' 
            placeholder = 'Enter Username'
            fullWidth required
            />

        {/* PASSWORD */}
        <TextField 
            id="password"
            label="Password" 
            variant="standard" 
            name='password' 
            type= "password"
            placeholder = 'Enter Password'
            fullWidth required
            />


            <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  
              name="remember me"
              color= "primary"
              />
            }
            label="Remember me"
          />
            </FormGroup>
    
         

            {/* <Link to="users"> */}
            <Button 
            type = "submit"
            variant = "contained"
            color = "primary"
            id = "signInBtn"
            onClick={() => navigate("/users")}
            fullWidth>
                Sign In
                </Button>
              {/* </Link> */}


                <Typography >
                    <Link href= "#" >
                    Forgot Password? 
                    </Link>
                </Typography>

                <Typography >
                    Do you have an account?
                    <Link href= "#" >
                        Sign Up
                    </Link>
                </Typography >
                



    </Paper>
   </Grid>
  )
}

export default Login
