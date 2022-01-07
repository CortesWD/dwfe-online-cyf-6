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

/**
 * Hooks
 */
import { useWindowResize } from '../../hooks/useWindowResize';

function LoginForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const width = useWindowResize();

  return (
    <div className='flex-container centered'>
      <Card className={`${width > 400 ? 'big' : 'mobile' }`}>
        <form className="form">
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="name"
            value={name}
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            name="name"
            value={username}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            name="password"
            type="password"
            value={password}
          />
          <Button
            type="button"
          >
            Crear cuenta
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
