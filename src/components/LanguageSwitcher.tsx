import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-primary" />
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 h-auto text-xs font-semibold transition-colors ${
            i18n.language === 'en'
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          EN
        </Button>
        <span className="text-muted-foreground">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeLanguage('tr')}
          className={`px-2 py-1 h-auto text-xs font-semibold transition-colors ${
            i18n.language === 'tr'
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          TR
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
