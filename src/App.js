import {React} from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import GlobalStyle from './style/GlobalStyle.js'

function App() {
  return (
    <>
      <GlobalStyle />
      <section>
      <Header/>
      <Main/>
      <Footer/>
      </section>
    </>
    
    
  );
}

export default App;
