import React, { useState } from 'react';
import {
  Avatar,
  Stack,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';


const isAdmin = true;


const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const secretKey = useInputValidation("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if(isAdmin) return <Navigate to ="/admin/dashboard"/>

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(225 225 209),rgba(249,159,159))",
      height: "100vh"
    }}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          padding: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}>
            <TextField
              required
              fullWidth
              label="Secret Key"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default AdminLogin;
