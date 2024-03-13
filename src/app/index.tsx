import vkBridge from '@vkontakte/vk-bridge';
import { createRoot } from 'react-dom/client';
import { queryClient } from '@/shared/api/query-client.ts';
import { App } from './app.tsx';
import { Providers } from './providers/index.tsx';

vkBridge.send('VKWebAppInit');

createRoot(document.getElementById('root')!).render(
  <Providers client={queryClient}>
    <App />
  </Providers>,
);
