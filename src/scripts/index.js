import "@pixu-talks/core";

import "./baseline-status/baseline-status.js";

import "./_doodle.js";
import { initFpsBasics } from "./_00-fps-basics.js";

import { initSlideHooks } from "./_slide-hooks.js";
import { initTiltLayeredCard } from "./_08-tilt-layered-card.js";

/**
 * Initialize all motion JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
	initFpsBasics();
	initSlideHooks();
	initTiltLayeredCard();
});
