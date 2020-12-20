import { useState } from 'react';
import { Button } from './button';

import css from './common.module.css';

export interface EmailFormProps {
  onSubmit(value: string): Promise<void>;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };
  return (
    <form className={css['email-form']} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        type="email"
        name="email"
        placeholder="Login Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
