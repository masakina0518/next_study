import { GetServerSideProps, NextPage } from "next"
import Head from 'next/head'
import React from "react"

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link href="/favicon.icon" />
            </Head>
            <main>
                <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです。</p>
                <p>{ message }</p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にこのページのgetSererSIdePropsが実行されました`
    console.log(message)
    console.log(context.req, context.res, context.resolvedUrl, context.query)
    return {
        props: {
            message
        }
    }
}

export default SSR