import React, { useRef, useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../../../components/layout/Flex'
import Text from '../../../components/atoms/Text'
import {
    CheckBoxOutlineBlankIcon,
    CheckBoxIcon,
} from '../../../components/atoms/IconButton'

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
    label?: string
}

const CheckBoxElement = styled.input`
    display: none;
`

const Label = styled.label`
    cursor: pointer;
    margin-left: 6px;
    user-select: none;
`

const CheckBox = (props: CheckBoxProps) => {
    const { id, label, onChange, checked, ...rest } = props
    const [isChecked, setIsChecked] = useState(checked)
    const ref = useRef<HTMLInputElement>(null)

    const onClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault()
            ref.current?.click()
            setIsChecked((isChecked) => !isChecked)
        },
        [ref, setIsChecked],
    )


    useEffect(() => {
        setIsChecked(checked ?? false)
        console.log('useEffect!')
    }, [checked])

    console.log(isChecked, checked)

    return (
        <>
        {/* チェックボックスの本体（非表示） */}
            <CheckBoxElement
                {...rest}
                ref={ref}
                type="checkbox"
                readOnly={!onChange}
                onChange={onChange}
            />
            <Flex alignItems="center">
                {/* チェックボックスのON/OFFの描画 */}
                { isChecked ? (
                    <CheckBoxIcon size={20} onClick={onClick} />
                ) : (
                    <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
                )}
                {label && label.length > 0 && (
                    <Label htmlFor={id} onClick={onClick}>
                        <Text>{label}</Text>
                    </Label>
                )}
            </Flex>
        </>
    )
}

export default CheckBox