import css from './common.module.css';
import { ReactComponent as Logo } from '../../public/assets/logo.svg';

export const Loader = () => <Logo className={css.loading} />;
