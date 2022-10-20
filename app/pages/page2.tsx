import { NextPage } from "next"
import React from "react"
import styled from 'styled-components'

type ButtonProps = {
    color: string
    backgroundColor: string
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color };
    background: ${(props) => props.backgroundColor };
    border: 2px solid ${(props) => props.color };

    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    curusor: pointer;
`

const Page2: NextPage = () => {
    return (
        <div>
            <Button backgroundColor="transparent" color="#FF0000">Hello</Button>
            <Button backgroundColor="#1E90FF" color="#white">Hello</Button>
        </div>
    )
}

export default Page2