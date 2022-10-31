import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { StyledButton } from '../components/StyledButton'
import MDXDocument from './StyledButton.mdx'
 
export default {
    title: 'StyledButton',
    component: StyledButton,
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['primary', 'success', 'transparent'],
        },
        children: {
            control: {type: 'text'},
        },
    },
    parameters: {
        docs: {
            page: MDXDocument,
        }
    },
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
    variant: 'primary',
    children: 'Primary',
}


// -----------------------------------------------

// export default {
//     title: 'StyledButton',
//     component: StyledButton,
// } as ComponentMeta<typeof StyledButton>

// const incrementAction = action('increment')

// export const Primary = (props) => {

//     const [count, setCount] = useState(0)
//     const onClick = (e: React.MouseEvent) => {
//         incrementAction(e, count)
//         setCount((c) => c + 1)
//     }

//     return (
//         <StyledButton {...props} variant="primary" onClick={onClick}>
//             {count}
//             Primary
//         </StyledButton>
//     )
// }

// export const Success = (props) => {
//     return (
//         <StyledButton {...props} variant="success">
//             Success
//         </StyledButton>
//     )
// }

// export const Transparent = (props) => {
//     return (
//         <StyledButton {...props} variant="transparent">
//             Transparent
//         </StyledButton>
//     )
// }