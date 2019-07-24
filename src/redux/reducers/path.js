import { UPDATE_SUBMENU, UPDATE_MENUITEM } from "../actions/path"

const initialState = {
  activeSubMenu: '/employee/department',
  activeMenuItem: '/employee/department/list'
}

export default function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_SUBMENU: {
      return {
        ...state,
        activeSubMenu: action.payload
      }
    }

    case UPDATE_MENUITEM: {
      return {
        ...state,
        activeMenuItem: action.payload
      }
    }

    default:
      return state
  }
}