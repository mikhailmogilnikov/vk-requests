import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';
import {
  ERootsNames,
  EPanelsNames,
  EViewsNames,
} from '@/shared/model/types/routes.enum';

export const routes = RoutesConfig.create([
  createRoot(ERootsNames.DEFAULT_ROOT, [
    createView(EViewsNames.DEFAULT_VIEW, [
      createPanel(EPanelsNames.HOME, '/', []),
      createPanel(EPanelsNames.FORM, `/${EPanelsNames.FORM}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
