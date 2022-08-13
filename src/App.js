import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Center } from "./Components/Main/Center";
import { LeftBar } from "./Components/Main/LeftBar";
import { RightBar } from "./Components/Main/RightBar";

const App = () => {
  const [burger, setBurger] = useState(true);

  return (
    <div className="app-wrapper">
      <header>
        <Header setBurger={setBurger} burger={burger} />
      </header>
      <main>
        <Grid
          container
          sx={{
            paddingTop: "70px",
            height: "100vh",
          }}
        >
          <Grid
            item
            xs={burger ? 2 : 0}
            sm={burger ? 2 : 0}
            sx={{
              ml: {
                xs: !burger ? "-60px" : "0",
                sm: !burger ? "-95px" : "0",
                md: !burger ? "-170px" : "0",
                lg: !burger ? "-190px" : "0",
              },
              transition: "1s all ease",
            }}
          >
            <LeftBar />
          </Grid>
          <Grid
            item
            xs={10}
            sm={burger ? 7 : 9}
            sx={{
              transition: "1s all ease-in",
            }}
          >
            <Center />
          </Grid>
          <Grid item xs={0} sm={burger ? 3 : 2.7} md={burger ? 3 : 0}>
            <RightBar burger={burger} />
          </Grid>
        </Grid>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
