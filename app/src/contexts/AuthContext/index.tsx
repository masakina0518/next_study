import React, { useContext } from 'react'
import useSWR from 'swr'

import signin from './../../services/auth/signin'
import signout from './../../services/auth/signout'
import { ApiContext, User } from './../../types/data'


type AuthContextType = {
    authUser?: User
    isLoading: boolean
    signin: (username: string, password: string) => Promise<void>
    signout: () => Promise<void>
    mutate: (
        data?: User | Promise<User>,
        shoudRevalidate?: boolean,
    ) => Promise<User | undefined>
}

// context初期化
const AuthContext = React.createContext<AuthContextType>({
    authUser: undefined,
    isLoading: false,
    signin: async () => Promise.resolve(),
    signout: async () => Promise.resolve(),
    mutate: async () => Promise.resolve(undefined),
}) 

export const useAuthContext = (): AuthContextType => 
    useContext<AuthContextType>(AuthContext)


type AuthContextProviderProps = {
    context: ApiContext
    authUser?: User
}

export const AuthContextProvider = ({
    context,
    authUser,
    children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
    // ライブラリの使い方としてはuseSWRというReact Hooksを用いることで、APIを通じたデータの取得・キャッシュを簡単に記述する手助けをしてくれます。
    const { data, error, mutate } = useSWR<User>(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/me`
    )

    // ログイン前はtrueとなる
    const isLoading = !data && !error

    // サインイン関数はコンテキストに保持させる
    const signinInternal = async (username: string, password: string) => {
        await signin(context, {username, password})
        await mutate()
    }

    // サインアウト関数はコンテキストに保持させる
    const signoutInternal = async() => {
        await signout(context)
        await mutate()
    }

    return (
        <AuthContext.Provider
            value={{
                authUser: data ?? authUser,
                isLoading,
                signin: signinInternal,
                signout: signoutInternal,
                mutate,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}