import {NextRouter} from "next/router";

export const routerToTitle = (router: NextRouter) => {
 return router.pathname
    .slice(1)
    .split("-")
    .map(item => capitalizeFirstLetter(item))
    .join(" ")
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}