import React from "react"
import styled from "styled-components"
// import SignUpPage from "./pages/SignUpPage/SignUpPage"
import RoutesPage from "./routes/RoutesPage"


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export default function App() {
  return (
    <MainContainer>
      <RoutesPage/>
      {/* <SignUpPage/> */}
    </MainContainer>
  )
}

