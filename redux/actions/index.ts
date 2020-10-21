import {CLIENT_HEIGHT, IS_OPEN_HAMBURGER} from "./types";

export const setIsOpenHamburger = (isOpen: boolean) => ({
  type: IS_OPEN_HAMBURGER,
  payload: isOpen
} as const)

export const setClientHeight = (clientHeight: number) => ({
  type: CLIENT_HEIGHT,
  payload: clientHeight
} as const)
