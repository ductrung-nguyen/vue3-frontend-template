// import { ComputedRef } from 'vue';
// import { ThemeEnum } from '/@/enums/appEnum';
// import { MenuModeEnum } from '/@/enums/menuEnum';
export interface MenuState {
  // list selected by default
  defaultSelectedKeys: string[];

  // indentation
  inlineIndent?: number;

  // Expand the array
  openKeys: string[];

  // Currently selected menu item key array
  selectedKeys: string[];

  // Expanded array in contracted state
  collapsedOpenKeys: string[];
}
