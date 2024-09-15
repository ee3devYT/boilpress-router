# Boilpress Router Beta (express)

## Overview

This project demonstrates the usage of the `@boilpress-router-beta/express` library with Express.js to set up routing in a TypeScript-based application you can use it with javascript too just change the code accordingly.

## Setup

### Installation

First, ensure you have the necessary dependencies installed. If not, you can install them using npm or pnpm:

```bash
pnpm add express @boilpress-router-beta/express
```

## File Structure

You can put your routes in any folder you want, but for this example, we'll put them in a `src/routes` folder.

- `src/routes/` - Contains route handlers for your application.
- `src/routes/index.ts` - Handles the root route (`/`).
- `src/routes/hi/index.ts` - Handles the `/hi` route.
- `src/routes/users/[id].ts` - Handles dynamic routing for `/users/:id`.

## Usage
`index.ts`
This is the entry point of your application.

```javascript
import { boilpressRouter } from "@boilpress-router-beta/express";
import express from "express";

const app = express();
const PORT = 8000;

boilpressRouter(app, {
    path: "src/routes" // Path to your routes folder. If you don't have a 'src' folder, just use 'routes' or whatever your folder is named.
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
## Route Handlers

`src/routes/index.ts`
Handles the root route `(/)`.

```javascript
import { Request, Response } from 'express';

export function GET(req: Request, res: Response): void {
    res.send("Hello from the index route!");
}
```

`src/routes/hi/index.ts`
Handles the `/hi` route.

```javascript
import { Request, Response } from 'express';

export function GET(req: Request, res: Response): void {
    res.send("Hello from the hi route!");
}
```

`src/routes/users/[id].ts`
Handles dynamic routing for `/users/:id`.

```javascript
import { Request, Response, NextFunction } from 'express';

export function GET(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
}
```
## Notes
- You can create nested routes by creating folders inside the `routes` folder.
- You can also create a `[id].ts` file to handle dynamic routing for `/users/:id`.
- Remember for now, if you have any file that ends with `.ts`, `.js`, `.cjs` or `.mjs`, it will be treated as a route please let me know if i should change it with something like `route.ts` or something else.

This is a utility library for my other project called boilpress (under development).

## Contributing

This project is open-source, so like... please help me out. I legit can't handle this shit on my own 😭🙏.

## Contact 

If you need to ask something or drop some feedback, just hit me up on Discord: @iee3dev or Twitter: @ee3dev. And come join my Discord server before I start talking to myself! (I need friends 😭)
- [Discord Server](https://discord.gg/HSFBBccBzK)
- [Twitter](https://twitter.com/ee3dev)
