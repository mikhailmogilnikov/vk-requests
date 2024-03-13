import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { FormView } from '@/pages/form';
import { HomeView } from '@/pages/home';
import { EPanelsNames } from '@/shared/model/types/routes.enum';

export const App = () => {
  const { panel: activePanel = EPanelsNames.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <HomeView id={EPanelsNames.HOME} />
          <FormView id={EPanelsNames.FORM} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
