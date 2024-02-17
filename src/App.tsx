import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      // mobile devices
      base: `"nav" "main"`,
      // large devices (larger than 1024px)
      lg: `"nav nav" "aside main"`  
    }}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* only shows on large devices */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
