import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Input from './index'

export default {
    title: 'Atoms/Input',
    argTypes: {
        placeholder: {
            control: { type: 'text'},
            description: 'プレースフォルダー',
            table: {
                type: { summary: 'string' },
            },
        },
        hasBorder: {
            control: { type: 'boolean'},
            description: 'ボーダーフラグ',
            table: {
                type: { summary: 'boolean' },
            },
        },
        hasError: {
            control: { type: 'boolean'},
            description: 'バリデーションエラーフラグ',
            table: {
                type: { summary: 'boolean' },
            },
        },
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
