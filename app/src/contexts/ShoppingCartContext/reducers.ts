import React from 'react';
import { Product } from '../../types'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

type ShopReducerAction = | 
    {
        type: 'ADD_PRODUCT'
        payload: Product
    }
    | {
        type: 'REMOVE_PRODUCT'
        payload: number
    }

/**
 * 
 * @param product 
 * @param state 
 * @returns 
 */
const addProductCart = (product: Product, state: Product[]) => {
    return [...state, product]
}

/**
 * 
 * @param productId 
 * @param state 
 * @returns 
 */
const removeProductFromCart = (productId: number, state: Product[]) => {
    const removedItemIndex = state.findIndex((item) => item.id === productId)

    state.splice(removedItemIndex, 1)

    return [...state]
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
export const shopReducer: React.Reducer<Product[], ShopReducerAction> = (
    state: Product[],
    action: ShopReducerAction,
) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return addProductCart(action.payload, state)
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.payload, state)
        default:
            return state
    }
}
