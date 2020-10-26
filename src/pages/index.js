import React from "react"
import { Layout } from "../components/layout"
import styled from "styled-components"

const Div = styled.div`
  background-color: ${props => props.theme.mainColor};
`

export default function Home() {
  return (
    <Layout>
      <Div>Hello world!</Div>
    </Layout>
  )
}
