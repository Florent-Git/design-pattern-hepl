import { createDevTools } from "@redux-devtools/core";
import { DockMonitor } from "@redux-devtools/dock-monitor";
import { LogMonitor } from "@redux-devtools/log-monitor";

export const devTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        defaultIsVisible={true}
    >
        <LogMonitor theme="tomorrow" />
    </DockMonitor>
);