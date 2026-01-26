import { H3, serve } from "h3";

import {
  createIPX,
  ipxFSStorage,
  ipxHttpStorage,
  createIPXWebServer,
} from "ipx";

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public" }),
  httpStorage: ipxHttpStorage({ allowAllDomains: true}),
});

const app = new H3();

app.mount("/ipx", createIPXWebServer(ipx));

// http://localhost:3000/ipx/w_512/picsum/1000
serve(app);