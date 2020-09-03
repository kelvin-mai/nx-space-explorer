import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
};
