import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";
import { applyPolyfills, defineCustomElements } from '@midmark-enterprise/universal-shared-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
})

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
