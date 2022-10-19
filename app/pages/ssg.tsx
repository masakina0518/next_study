import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props: SSGProps) => {
    const { message } = props  

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです。
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetStaticPropsが実行されました`
    console.log(message)

    return {
        props: {
            message
        },
    }
}


export default SSG