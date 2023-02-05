import '../styles/globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//INTERNAL IMPORT
import { Footer, NavBar } from '../Components/ComponentIndex';
import Home from '.';
import CollectionPage from './CollectionPage';

const App = ({ Component, pageProps }) => 
  <div>
  <NavBar/>
    <Component {...pageProps}  />
      <Footer />
    </div>
    

    


export default App;
 