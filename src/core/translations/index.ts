import { default as common } from './common.json';
import { default as en } from './en.json';
import { default as fr } from './fr.json';

interface translationsProps {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: translationsProps = {
  en,
  fr,
  common
};

const combinedTranslation = Object.keys(translations).reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: {
      translation: translations[cur]
    }
  }),
  {}
);

export default combinedTranslation;
