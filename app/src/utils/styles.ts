/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { theme } from 'themes'
import type { ResponseiveProp, Responsive } from 'types'

export type AppTheme = typeof theme

type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpaceingThemeKeys = keyof typeof theme.letterSpaceings
type LineHeightThemeKeys = keyof typeof theme.lineHeights

export type Space = SpaceThemeKeys | (string & {})
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpaceing = LetterSpaceingThemeKeys | (string & {})
export type LineHeigh = LineHeightThemeKeys | (string & {})

const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px', // 640px以上
  md: '768px', // 768px以上
  ld: '1024px', // 1024px以上
  xl: '1280px', // 1280px以上
}

/**
 * Responsive型をCSSプロパティとその値に変更
 */
export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme,
) {
  if (prop === undefined) return undefined

  if (isResponsivePropType(prop)) {
    const reslut = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        // デフォルトスタイル
        reslut.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        )
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        // メディアクエリスタイル
        const breakpoint = BREAKPOINTS[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme,
        )};`
        reslut.push(`2media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
  }
}

const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-left',
  'margin-bottom',
  'margin-right',
  'padding',
  'padding-top',
  'padding-left',
  'padding-bottom',
  'padding-right',
])
const COLOR_KEYS = new Set(['color', 'background-color'])
const FONT_SIZE_KEYS = new Set(['font-size'])
const LETTER_SPACING_KEYS = new Set(['letter-spacing'])
const LINE_HEIGHT_KEYS = new Set(['line-height'])

/**
 * Themeに指定されたCSSプロパティの値に変換
 */
function toThemeValueIfNeeded<T>(prppKey: string, value: T, theme?: AppTheme) {
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(prppKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value]
  } else if (
    theme &&
    theme.colors &&
    COLOR_KEYS.has(prppKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value]
  } else if (
    theme &&
    theme.fontSizes &&
    FONT_SIZE_KEYS.has(prppKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    theme &&
    theme.letterSpaceings &&
    LETTER_SPACING_KEYS.has(prppKey) &&
    isLetterSpaceingThemeKeys(value, theme)
  ) {
    return theme.letterSpaceings[value]
  } else if (
    theme &&
    theme.lineHeights &&
    LINE_HEIGHT_KEYS.has(prppKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value]
  }
  // 該当がなければそのままCSSプロパティを返却
  return value
}

/**
 * isResponsivePropType
 */
function isResponsivePropType<T>(prop: any): prop is ResponseiveProp<T> {
  return (
    prop &&
    (prop.base != undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  )
}

function isSpaceThemeKeys(prop: any, theme: AppTheme): prop is SpaceThemeKeys {
  return Object.keys(theme.space).filter((key) => key == prop).length > 0
}
function isColorThemeKeys(prop: any, theme: AppTheme): prop is ColorThemeKeys {
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0
}
function isFontSizeThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is FontSizeThemeKeys {
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0
}
function isLetterSpaceingThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LetterSpaceingThemeKeys {
  return (
    Object.keys(theme.letterSpaceings).filter((key) => key == prop).length > 0
  )
}
function isLineHeightThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LineHeightThemeKeys {
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0
}
