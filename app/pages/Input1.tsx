import { NextPage } from "next"
import React from "react"
import { DelayInput } from "../components/DelayInput"

const test = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
}


const Input1: NextPage = () => {
    return <DelayInput onChange={test} />
}

export default Input1