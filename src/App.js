import "./styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewCampaign from "./pages/campaign/NewCampaign";
import MyCampaign from "./pages/campaign/MyCampaign";
import CampaignSingle from "./pages/campaign/CampaignSingle";
import Requests from "./pages/campaign/withDrawal/Requests";
import NewRequest from "./pages/campaign/withDrawal/NewRequest";
import "@fontsource/space-grotesk";
import { Route, Routes } from "react-router-dom";

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
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/campaign"} element={<Home />} />
          <Route path={"/campaign/new"} element={<NewCampaign />} />
          <Route path={"/campaign/my"} element={<MyCampaign />} />
          <Route
            path={"/campaign/CampaignSingle"}
            element={<CampaignSingle />}
          />
          <Route
            path={"/campaign/withdrawal/requests"}
            element={<Requests />}
          />
          <Route
            path={"/campaign/withdrawal/requests/new"}
            element={<NewRequest />}
          />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
