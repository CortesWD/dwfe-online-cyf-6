/**
 * Dependencies
 */
import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameNormalized = username.toLowerCase();
    if (usernameNormalized === 'username' || username === 'test' || username === '' ) {
      setUserError(true);
    }
  }

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
            type="submit"
            onClick={handleSubmit}
          >
            login
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
