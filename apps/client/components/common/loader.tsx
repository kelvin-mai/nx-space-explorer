import React from 'react';

import scss from './common.module.scss';
import { ReactComponent as Logo } from '../../public/assets/logo.svg';

export interface LoaderProps {}

export const Loader = () => <Logo className={scss.loading} />;

export default Loader;
