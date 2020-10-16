import {useDispatch} from 'react-redux'
import {useCallback} from "react";
import {setIsOpenHamburger} from "./actions";

export function useSetIsShowMenu() {
  const dispatch = useDispatch();
  return useCallback((isOpen: boolean) => {
    dispatch(setIsOpenHamburger(isOpen));
  }, [dispatch]);
}