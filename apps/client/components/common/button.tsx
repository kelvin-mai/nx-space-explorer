import css from './common.module.css';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className={css.button}>
    {children}
  </button>
);
