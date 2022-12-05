import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';
import { applyPolyfills } from '@midmark-enterprise/universal-shared-components/loader';
import { defineCustomElement as defineMyComponent } from '@midmark-enterprise/universal-shared-components/dist/components/my-component';

applyPolyfills().then(() => {
  defineMyComponent();
});

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
