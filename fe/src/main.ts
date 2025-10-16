import "./style.css";
import "leaflet/dist/leaflet.css";

import { MapCore } from "./MapCore";
import { eventBus } from "./MapCore/eventBus/EventBus";

const mapCore = new MapCore(eventBus, {
  plugins: [],
});

// Initialize Plugins
mapCore.initializePlugins();
