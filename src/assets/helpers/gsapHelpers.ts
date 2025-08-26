import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const g = (gsap.core as any).globals?.() ?? {};
if (!g.ScrollToPlugin) {
  gsap.registerPlugin(ScrollToPlugin);
}

export { gsap, ScrollToPlugin };