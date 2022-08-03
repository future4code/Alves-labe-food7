import React from "react"
import styled from "styled-components"
import RoutesPage from "./routes/RoutesPage"
import GlobalState from "./services/Global/GlobalState"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export default function App() {
  return (
    <GlobalState>
    <MainContainer>
       < RoutesPage/>
    </MainContainer>
     </GlobalState>

  )
}

