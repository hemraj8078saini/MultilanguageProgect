import { useTranslation } from 'react-i18next';
import i18n from './i18n'; 

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('greeting')}</h1>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
      </header>
      <div>
        <p>{t('someOtherText')}</p>
        
        <p>{t('Welcome to my website!')}</p>
        <p>{t('This is a paragraph that needs translation.')}</p>
       
      </div>
    </div>
  );
}

export default App;
