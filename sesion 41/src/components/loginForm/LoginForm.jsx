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
  const [userError, setUserError] = useState(false);

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
    } else {
      setUserError(false);
    }
  }, [username]);

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
          <Input placeholder="password" name="password" type="password" />
          <Button
            type="button"
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
