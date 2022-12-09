// @ts-check

import createPrompt from "prompt-sync";
import input from "sync-input";

const prompt = createPrompt({});

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

/**
 *
 * @param text
 * @returns
 */
export const inputPassword = (text: string) => prompt.hide(text);
