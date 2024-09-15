import { Express, Request, Response } from 'express';
import { ROUTING_METHODS as methods } from '../../constants';
import { RouteHandler } from '../../base/@types'; // Import the RouteHandler type

// Don't ask me what is happening here, I just know that it works
export const registerRoutes = (app: Express, routePath: string, route: RouteHandler): void => {
  methods.forEach((method) => {
    if (route[method as keyof RouteHandler]) {
      app[method.toLowerCase() as keyof Express](routePath, (...args: [Request, Response, any]) => {
        route[method as keyof RouteHandler]?.(...args); // Call the route handler safely
      });
      console.log(`${method} route added: ${routePath}`);
    }
  });
};

