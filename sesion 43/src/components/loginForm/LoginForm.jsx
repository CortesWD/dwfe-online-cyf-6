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

function LoginForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [width, setWidth] = useState(undefined)

  useEffect(() => {

    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    // al destruir el componente
    // debemos quitar listeners y scripts para evitar
    // leaks de memoria y que la app crashee
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

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
