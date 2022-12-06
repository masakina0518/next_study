import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './index'

export default {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      description: 'テキストバリアント',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: { type: 'text' },
      discription: 'テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      discription: 'フォントの太さ',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      discription: '行の高さ',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'color' },
      discription: 'テキストの色',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      discription: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    m: {
      control: { type: 'number' },
      discription: 'マージン',
      table: {
        type: { summary: 'number' },
      },
    },
    mt: {
      control: { type: 'number' },
      discription: 'マージントップ',
      table: {
        type: { summary: 'number' },
      },
    },
    mr: {
      control: { type: 'number' },
      discription: 'マージンライト',
      table: {
        type: { summary: 'number' },
      },
    },
    mb: {
      control: { type: 'number' },
      discription: 'マージンボトム',
      table: {
        type: { summary: 'number' },
      },
    },
    ml: {
      control: { type: 'number' },
      discription: 'マージンレフト',
      table: {
        type: { summary: 'number' },
      },
    },
    p: {
      control: { type: 'number' },
      discription: 'パディング',
      table: {
        type: { summary: 'number' },
      },
    },
    pt: {
      control: { type: 'number' },
      discription: 'パディングトップ',
      table: {
        type: { summary: 'number' },
      },
    },
    pr: {
      control: { type: 'number' },
      discription: 'パディングライト',
      table: {
        type: { summary: 'number' },
      },
    },
    pb: {
      control: { type: 'number' },
      discription: 'パディングボトム',
      table: {
        type: { summary: 'number' },
      },
    },
    pl: {
      control: { type: 'number' },
      discription: 'パディングレフト',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

const longText = `Mrs. Louise Mallard, afflicted with a heart condition, reflects on the death of her husband from the safety of her locked room. Originally published in Vogue magazine, “The Story of an Hour” was retitled as “The Dream of an Hour,” when it was published amid much controversy under its new title a year later in St. Louis Life. “The Story of an Hour” was adapted to film in The Joy That Kills by director Tina Rathbone, which was part of a PBS anthology called American Playhouse.`

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { variant: 'extraSmall', children: longText }

export const Small = Template.bind({})
Small.args = { variant: 'small', children: longText }

export const Medium = Template.bind({})
Medium.args = { variant: 'medium', children: longText }

export const MediumLarge = Template.bind({})
MediumLarge.args = { variant: 'mediumLarge', children: longText }

export const Large = Template.bind({})
Large.args = { variant: 'large', children: longText }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { variant: 'extraLarge', children: longText }
