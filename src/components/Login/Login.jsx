import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext/useAuthContext';
import './Login.css';

export const Login = () => {
  const [userForm, setUserForm] = useState({name: '', password: ''});
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return (
      <Navigate to='/admin/alta-productos' replace />
    )
  }
  
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(userForm.name, userForm.password)

    if (success) {
      navigate('/admin/productos');
    } else {
      alert('Credenciales incorrectas');
      setUserForm({name: '', password: ''});
    }    
  }

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit} className='login-card'>
        <h2>Iniciar Sessión</h2>
        <div className='form-input'>
          <label htmlFor="name" className='form-label'>
            Usuario:
          </label>
          <input id='name' type="text" name="name" value={userForm.name} onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label htmlFor="password" className='form-label'>Clave:</label>
          <input id='password' type="password" name="password" value={userForm.password} onChange={handleChange} />
        </div>

        <button type="submit">Iniciar Sesión</button>
      
      </form>
    </section>
  )
}
