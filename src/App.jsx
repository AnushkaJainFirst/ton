import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';
import Sidebar from './components/Sidebar';
import LanguageCard from './components/LanguageCard';
import englishFlag from './assets/english.png';
import hindiFlag from './assets/hindi.png';
import chineseFlag from './assets/chinese.png';
import frenchFlag from './assets/french.png';
import spanishFlag from './assets/spanish.png';

const languages = [
  { name: 'English', flag: englishFlag },
  { name: 'Hindi', flag: hindiFlag },
  { name: 'Chinese', flag: chineseFlag },
  { name: 'French', flag: frenchFlag },
  { name: 'Spanish', flag: spanishFlag }
];



function App() {

  WebApp.ready();
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <h1>Language Courses</h1>
        <div className="language-cards">
          {languages.map((lang, index) => (
            <LanguageCard key={index} name={lang.name} flag={lang.flag} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
