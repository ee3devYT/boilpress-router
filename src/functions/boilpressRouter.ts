import { Express } from 'express';
import { Config } from '../base/@types';
import { PROJECT_ROOT_DIR } from '../constants';
import { walkSync, toRoutePath, registerRoutes} from '../base/helpers';
import path from 'path';

export function boilpressRouter(app: Express, config: Config): void {
  const routingDir = path.join(PROJECT_ROOT_DIR, config.path);
  console.log(`Loading routes from: ${routingDir}`);

  const routeFiles = walkSync(routingDir); // Use the fileWalker module to collect routes

  // Loop over the collected files and register them
  routeFiles.forEach((file) => {
    const routePath = toRoutePath(file, routingDir); // Use the routePathConverter module
    console.log(`Registering route: ${routePath} for file: ${file}`);

    try {
      const route = require(file); // Dynamically require the route file
      registerRoutes(app, routePath, route); // Use the routeRegistrar module
    } catch (error) {
      console.error(`Error registering route at ${routePath}:`, error);
    }
  });
}

