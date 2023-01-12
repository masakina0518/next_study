import React, { useState, useContext, createContext } from 'react'

const GlobalSpinnerContext = createContext<boolean>(false)
// useStateの関数はReact.Dispatch<React.SetStateAction<boolean>>で表現できる
const GlobalSpinnerActionContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {})

/**
 * useContextを使いやすくするためのラッパー関数
 * @returns 
 */
export const useGlobalSpinnerContext = (): boolean =>
    useContext<boolean>(GlobalSpinnerContext)

/**
 * useContextを使いやすくするためのラッパー関数
 * @returns 
 */
export const useGlobalSpinnerActionContext = (): React.Dispatch<React.SetStateAction<boolean>> =>
    useContext<React.Dispatch<React.SetStateAction<boolean>>>(
        GlobalSpinnerActionContext
    )


/**
 * 設定されたノードにContext.providerを設定するための関数
 */
interface GlobalSpinnerContextProviderProps {
    children?: React.ReactNode
}

const GlobalSpinnerContextProvider = ({ children }: GlobalSpinnerContextProviderProps) => {
    const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

    return (
        <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
            <GlobalSpinnerActionContext.Provider value={setGlobalSpinner}>
                {children}
            </GlobalSpinnerActionContext.Provider>
        </GlobalSpinnerContext.Provider>
    )
}

export default GlobalSpinnerContextProvider