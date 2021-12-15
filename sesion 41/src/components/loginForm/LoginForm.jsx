/**
 * Dependencies
 */
import React, { useEffect, useState } from "react";

/**
 * Components
 */
import Card from "../card/Card";
import Input from "../input/Input";
import Button from "../button/Button";

/**
 * Styles
 */
import "./LoginForm.css";

const invalidUsers = ['', 'username', 'test'];

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (invalidUsers.includes(username.toLowerCase())) {
  //     setUserError(true)
  //   }
  // }

  useEffect(() => {
    console.log('componente montado');
    return () => {
      console.log('componente destruido')
    }
  }, []);

  useEffect(() => {
  // username.length > 0
    if(username.length && (username.length < 3 || username.toLowerCase() === 'username')) {
      setUserError(true);
      setDisabledBtn(true);
    } else {
      setUserError(false);
      setDisabledBtn(false);
    }
  }, [username]);

  useEffect(() => {
    if(password.length && (password.length < 3 || password.toLowerCase() === 'password'
    || !password.includes('.'))) {
      setPassError(true);
      setDisabledBtn(true);
    } else {
      setPassError(false);
      setDisabledBtn(false);
    }
  }, [password]);

  return (
    <div className="flex-container centered">
      <Card>
        <form className="form">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            name="name"
            value={username}
            error={userError}
            errorMessage='usuario inválido'
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            name="password"
            type="password"
            value={password}
            error={passError}
            errorMessage='password inválido'
          />
          <Button
            type="button"
            disabled={disabledBtn}
            // onClick={handleSubmit}
          >
            Crear cuenta
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
