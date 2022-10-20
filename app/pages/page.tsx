import { NextPage } from "next"
import React from "react"
import styled from 'styled-components'

const Badge = styled.span`
    padding: 8px 16px;
    font-weight: bold;
    text-align: center;
    color: white;
    background: red;
    borer-radius: 16px;
`

const Page: NextPage = () => {
    return <Badge>Hello World!</Badge>
}

export default Page