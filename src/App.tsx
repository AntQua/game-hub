import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid templateAreas={{
      // mobile devices
      base: `"nav" "main"`,
      // large devices (larger than 1024px)
      lg: `"nav nav" "aside main"`  
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* only shows on large devices */}
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
