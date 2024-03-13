import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from '@vkontakte/vk-bridge';
import {
  useAdaptivity,
  useAppearance,
  useInsets,
} from '@vkontakte/vk-bridge-react';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { transformVKBridgeAdaptivity } from '@/shared/lib/transformVKBridgeAdaptivity';
import { router } from '../routes';

type Props = {
  children: React.ReactNode;
  client: QueryClient;
};

export const Providers = ({ children, client }: Props) => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search,
  );

  return (
    <QueryClientProvider client={client}>
      <ConfigProvider
        appearance={vkBridgeAppearance}
        platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
        isWebView={vkBridge.isWebView()}
        hasCustomPanelHeaderAfter={true}
      >
        <AdaptivityProvider {...adaptivity}>
          <AppRoot mode='full' safeAreaInsets={vkBridgeInsets}>
            <RouterProvider router={router}>{children}</RouterProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};
