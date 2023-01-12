import { ComponentMeta } from '@storybook/react'
import GlobalSpinner from './index'
import Button from '../../../components/atoms/Button'
import GlobalSpinnerContextProvider, { useGlobalSpinnerActionContext } from '../../../contexts/GlobalSpinnerContext'
import React from 'react'

export default {
    title: 'organisms/GlobalSpinner'
} as ComponentMeta<typeof GlobalSpinner>

export const WithContextProvider = () => {

    // childrenに該当する仮コンポネント
    const ChildComponent = () => {
      const setGlobalSpinner = useGlobalSpinnerActionContext()
      const handleClick = () => {
        setGlobalSpinner(true)

        setTimeout(() => {
          setGlobalSpinner(false)
        }, 5000)
      }

      return (
        <>
          <GlobalSpinner />
          <Button onClick={handleClick}>スピナー表示</Button>
        </>
      )  
    }

    return (
      <GlobalSpinnerContextProvider>
        <ChildComponent />
      </GlobalSpinnerContextProvider>
    )

}

