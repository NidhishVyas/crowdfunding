import "./styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewCampaign from "./pages/campaign/NewCampaign";
import CampaignSingle from "./pages/campaign/CampaignSingle";
import Requests from "./pages/campaign/withDrawal/Requests";
import NewRequest from "./pages/campaign/withDrawal/NewRequest";
import "@fontsource/space-grotesk";
import { useLocation, Route, Routes } from "react-router-dom";

const theme = extendTheme({ 
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/campaign/new"} element={<NewCampaign />} />
          <Route path={"/campaign/CampaignSingle"} element={<CampaignSingle />} />
          /* <Route path={"/campaign/withdrawal/requests"} element={<Requests />} />
          <Route path={"/campaign/withdrawal/requests/new"} element={<NewRequest />} /> 
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
