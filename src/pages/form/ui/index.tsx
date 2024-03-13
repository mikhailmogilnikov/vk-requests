import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import { AgeChecker } from '@/widgets/age-checker';

export const FormView = ({ id }: NavIdProps) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Форма
      </PanelHeader>
      <AgeChecker />
    </Panel>
  );
};
