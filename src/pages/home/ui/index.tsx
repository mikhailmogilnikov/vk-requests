import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Panel, PanelHeader, Button, Div, NavIdProps } from '@vkontakte/vkui';
import { CatFactBlock } from '@/widgets/cat-fact';
import { EPanelsNames } from '@/shared/model/types/routes.enum';

export const HomeView = ({ id }: NavIdProps) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <CatFactBlock />
      <Div>
        <Button
          stretched
          size='l'
          mode='secondary'
          onClick={() => routeNavigator.push(EPanelsNames.FORM)}
        >
          На страницу с формой
        </Button>
      </Div>
    </Panel>
  );
};
