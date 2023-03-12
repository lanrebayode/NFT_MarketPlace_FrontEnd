import { useContext } from "react";
import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, NavBar } from "../Components/ComponentIndex";
import Home from ".";
import CollectionPage from "./CollectionPage";

//SMART CONTRACT IMPORT
import { NFTMarketPlaceProvider } from "../Context/NFTMarketPlaceContext";

const App = ({ Component, pageProps }) => (
  <div>
    <NFTMarketPlaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketPlaceProvider>
  </div>
);

export default App;
