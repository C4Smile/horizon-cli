// @ts-check

import input from "sync-input";

/**
 *
 * @param text
 * @returns
 */
export const inputNumber = (text: string) => Number(input(text));

/**
 *
 * @param text
 * @returns
 */
export const inputString = (text: string) => input(text);
