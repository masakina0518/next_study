import React, { useState, useMemo } from 'react'

export const UseMemoSample = () => {

    console.log('UseMemoSample本体描画')

    const [text, setText] = useState('')

    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('onChangeInput描画')
        setText(e.target.value)
    }
    const onClickButton = () => {
        console.log('onClickButton描画')

        setItems((prevItems) => {
            // 前の配列に新しい
            return [...prevItems, text]
        })
        setText('')
    }

    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1}</p>
                <p>Total Number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}