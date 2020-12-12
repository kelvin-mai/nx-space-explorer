import { useState } from 'react';

import scss from './common.module.scss';
import { Button } from './button';

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
    <form className={scss['email-form']} onSubmit={handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        required
        id="login"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
