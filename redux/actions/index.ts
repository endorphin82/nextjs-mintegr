import {IS_OPEN_HAMBURGER} from "./types";

export const setIsOpenHamburger = (isOpen: boolean) => ({
  type: IS_OPEN_HAMBURGER,
  payload: isOpen
} as const)
