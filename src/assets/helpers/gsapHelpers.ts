import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// add more plugins here…

// Guard against double-registration in dev/HMR:
const g = (gsap.core as any).globals?.() ?? {};
if (!g.ScrollToPlugin) {
  gsap.registerPlugin(ScrollToPlugin);
}

export { gsap, ScrollToPlugin };