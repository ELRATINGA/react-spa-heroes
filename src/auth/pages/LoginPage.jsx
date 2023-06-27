import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();
  const {  user ,onChangedInput } = useForm({
    user:''
  });

  const onSubmitNotReloy = (even) => {
    even.preventDefault();

    if ( user.length <= 0 ) return;
  } 

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastpath') || '/';

    login(user)

    navigate(lastPath, {
      replace: true
    });
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={ onSubmitNotReloy }>
          <input 
            type="text"
            name="user"
            placeholder="Digite su usuario"
            className="form-control"
            value={ user }
            onChange={ onChangedInput }
          />

          <button 
            className="btn btn-primary mt-5"
            onClick={ handleLogin }
          >
            Login
          </button>
      </form>
    </div>
  )
}
