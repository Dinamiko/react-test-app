import {UPDATE_A, UPDATE_B, MULTIPLY} from "./types";
import {multiply} from "../utils/math";


export function updateA(value) {
    return {
        type: UPDATE_A,
        payload: value
    };
}

export function updateB(value) {
    return {
        type: UPDATE_B,
        payload: value
    };
}

export function doMultiply(a, b) {
    const result = multiply(a, b);

    return {
      type: MULTIPLY,
      payload: result
    };
}
