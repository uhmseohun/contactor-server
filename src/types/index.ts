import { NextFunction, Request, Response } from 'express';

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type Middleware =
  (req: Request, res: Response, next: NextFunction) => Promise<void>;
