import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import React from "react"

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props: PostProps) => {
    const { id } = props
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link href="/favicon.icon" />
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されたページです。</p>
                <p>{`/posts/${id}に対応するページです`}</p>
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
    ]
    return { paths, fallback: true}
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id']
        },
    }
}

export default Post