import {useDispatch} from 'react-redux'
import {useCallback} from "react";
import {setClientHeight, setIsOpenHamburger} from "./actions";

export function useSetIsShowMenu() {
  const dispatch = useDispatch();
  return useCallback((isOpen: boolean) => {
    dispatch(setIsOpenHamburger(isOpen));
  }, [dispatch]);
}
export function useSetClientHeight() {
  const dispatch = useDispatch();
  return useCallback((clientHeight: number) => {
    dispatch(setClientHeight(clientHeight));
  }, [dispatch]);
}