export const UPDATE_SUBMENU = 'UPDATE_SUBMENU'
export const UPDATE_MENUITEM = 'UPDATE_MENUITEM'

export function updateActiveSubMenu(activeSubmenu) {
  return {
    type: UPDATE_SUBMENU,
    payload: activeSubmenu
  }
}

export function updateActiveMenuItem(activeMenuItem) {
  return {
    type: UPDATE_MENUITEM,
    payload: activeMenuItem
  }
}