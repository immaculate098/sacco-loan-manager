import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/login', { username, password });
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #9c27b0 0%, #311b92 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        width: '800px'
      }}>
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <div style={{
            width: '100%',
            height: '300px',
            background: `url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '12px'
          }}></div>
        </div>
        
        <div style={{
          flex: '1',
          padding: '2rem'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Login</h2>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{
                color: 'white',
                fontSize: '0.9rem'
              }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your email"
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{
                color: 'white',
                fontSize: '0.9rem'
              }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
            
            <button type="submit" style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #9c27b0 0%, #311b92 100%)',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              marginTop: '1rem'
            }}>Login</button>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem'
            }}>
              <a href="/loans" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>Next</a>
              <a href="#" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;