import { I18n } from 'i18n-js';
import en from './translations/en.json';
import ar from './translations/ar.json';

const translations = { en, ar };

const i18n = new I18n(translations);

i18n.enableFallback = true;

export default i18n;
