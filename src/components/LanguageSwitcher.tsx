import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'am', label: 'AM' },
  { code: 'ha', label: 'HA' },
  { code: 'tr', label: 'TR' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 h-auto font-semibold transition-colors ${
              i18n.language === lang.code
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
