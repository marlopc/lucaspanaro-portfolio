import React from 'react';
import { localeContext } from '../contexts/localeContext';

const useLocale = () => React.useContext(localeContext);

export default useLocale;
