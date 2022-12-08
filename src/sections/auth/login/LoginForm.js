import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Alert, AlertTitle } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import AuthService from '../../../auth/AuthService';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password).then(
        () => {
          const token = localStorage.getItem('token');
          // alert(token);
          if (token == null) {
            alert('Ho');
            // <Alert variant="outlined" severity="error" spacing={3}>
            //     Error
            //   </Alert>;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <Stack spacing={3} justifyContent="space-between" sx={{ my: 2 }}>
        <Alert variant="outlined" severity="error" spacing={3}>
          Error
        </Alert>
      </Stack>
      <Stack spacing={3}>
        <TextField name="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onSubmit={handleLogin}>
        Login
      </LoadingButton>
    </form>
  );
}
