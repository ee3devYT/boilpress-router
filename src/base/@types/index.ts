import { Request, Response, NextFunction } from 'express';

export type Config = {
    path: string;
}

export interface RouteHandler {
  GET?: (req: Request, res: Response, next?: NextFunction, ...args: any[]) => void;
  POST?: (req: Request, res: Response, next?: NextFunction, ...args: any[]) => void;
  PUT?: (req: Request, res: Response, next?: NextFunction, ...args: any[]) => void;
  PATCH?: (req: Request, res: Response, next?: NextFunction, ...args: any[]) => void;
  DELETE?: (req: Request, res: Response, next?: NextFunction, ...args: any[]) => void;
}
