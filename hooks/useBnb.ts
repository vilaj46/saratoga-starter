import { Bnb } from "../types/Bnb"
import menuData from '../components/Header/menuData'
import { Menu } from '../types/menu'

import config from "../constants/config"

export const useBnb = () => {
  const isBrunswick = config.bnb === Bnb.Brunswick

  const menu: Array<Menu> =
    config.bnb === Bnb.Brunswick ? menuData.brunswick : menuData.unionGables

  return {
    isBrunswick,
    menu,
  }
}