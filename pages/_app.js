import '../styles/globals.css'

//INTERNAL IMPORT
import { NavBar } from '../Components/ComponentIndex';

const App = ({ Component, pageProps }) => 
<div>
  <NavBar/>
  <Component {...pageProps} />
</div>


export default App;
 gi