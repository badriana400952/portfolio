// import { Box, Container, Flex } from "@chakra-ui/react"
// import Add from "./component/Add"
// import List from "./component/List"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layoute from "./pages/Layoute"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Kontak"
import List from "./component/List"
import IndexProduc from "./component/TambahProduct"

// import IndexProduc from "./component/TambahProduct"

function App() {

  return (
    <>
      {/* <Container maxW='container.2xl' mt={'50px'}>
        <Flex shadow={'lg'} gap={'40px'}>
          <Box width={'40%'} shadow={'2xl'}  >
            <Add />
          </Box>
          <Box width={'50%'} shadow={'2xl'}>
            <List />
          </Box>
        </Flex>
        <Box mt={'40px'}>
          <IndexProduc/>
        </Box>
      </Container> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layoute />} >

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/add" element={<IndexProduc />} />
          <Route path="/list" element={ <List />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
