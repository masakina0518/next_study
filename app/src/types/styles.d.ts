/* eslint-disable @typescript-eslint/ban-types */
/**
 * Responsiveプロパティ
 * TはCSSプロパティの値
 */
export type ResponseiveProp<T> = {
  base?: T // デフォルト
  sm?: T // 640px
  md?: T // 768px
  lg?: T // 1024px
  xl?: T // 1280px
}

export type Responsive<T> = T | ResponseiveProp<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // コード自動補完
  | (string & {})

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  // コード自動補完
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  // コード自動補完
  | (string & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'left'
  | 'normal'
  | 'right'
  // コード自動補完
  | (string & {})

export type CSSPropertyFlexWrap =
  | ''
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  // コード自動補完
  | (string & {})

export type CSSPropertyFlexDirection =
  | ''
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  // コード自動補完
  | (string & {})

export type CSSPropertyJustifySelf =
  | ''
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  // コード自動補完
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  // コード自動補完
  | (string & {})

/**
 * Grid
 */
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  // コード自動補完
  | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  // コード自動補完
  | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
