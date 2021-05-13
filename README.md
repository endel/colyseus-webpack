# colyseus-webpack 

Test Colyseus compatibility with Webpack. How to run:

```
npm install
npm run webpack
```

**Current output:**

```
WARNING in ./node_modules/colyseus/node_modules/ws/lib/validation.js 86:20-45
Module not found: Error: Can't resolve 'utf-8-validate' in '/Users/endel/Projects/colyseus/colyseus-webpack/node_modules/colyseus/node_modules/ws/lib'
 @ ./node_modules/colyseus/node_modules/ws/lib/receiver.js 13:43-66
 @ ./node_modules/colyseus/node_modules/ws/index.js 7:21-46
 @ ./node_modules/colyseus/esm/Server.mjs 3:0-27 51:41-57
 @ ./node_modules/colyseus/esm/index.mjs 2:0-38 2:0-38
 @ ./src/rooms/MyRoom.ts 4:19-38
 @ ./src/arena.config.ts 11:17-42
 @ ./src/index.ts 16:39-64

WARNING in ./node_modules/express/lib/view.js 81:13-25
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/express/lib/application.js 22:11-28
 @ ./node_modules/express/lib/express.js 18:12-36
 @ ./node_modules/express/index.js 11:0-41
 @ ./node_modules/@colyseus/arena/lib/index.js 11:32-50
 @ ./src/index.ts 14:16-42

2 warnings have detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

ERROR in ./node_modules/default-gateway/LICENSE 1:14
Module parse failed: Unexpected token (1:14)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> Copyright (c) silverwind
| All rights reserved.
|
 @ ./node_modules/default-gateway/ sync ^\.\/.*$ ./LICENSE
 @ ./node_modules/default-gateway/index.js 24:12-32
 @ ./node_modules/internal-ip/index.js 3:23-49
 @ ./node_modules/colyseus/esm/discovery/index.mjs 1:0-29 6:52-57
 @ ./node_modules/colyseus/esm/Server.mjs 10:0-69 83:8-20 99:14-28
 @ ./node_modules/colyseus/esm/index.mjs 2:0-38 2:0-38
 @ ./src/rooms/MyRoom.ts 4:19-38
 @ ./src/arena.config.ts 11:17-42
 @ ./src/index.ts 16:39-64

ERROR in ./node_modules/default-gateway/README.md 1:1
Module parse failed: Unexpected character ' ' (1:1)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> # default-gateway
| [![](https://img.shields.io/npm/v/default-gateway.svg?style=flat)](https://www.npmjs.org/package/default-gateway) [![](https://img.shields.io/npm/dm/default-gateway.svg)](https://www.npmjs.org/package/default-gateway) [![](https://api.travis-ci.org/silverwind/default-gateway.svg?style=flat)](https://travis-ci.org/silverwind/default-gateway)
|
 @ ./node_modules/default-gateway/ sync ^\.\/.*$ ./README.md
 @ ./node_modules/default-gateway/index.js 24:12-32
 @ ./node_modules/internal-ip/index.js 3:23-49
 @ ./node_modules/colyseus/esm/discovery/index.mjs 1:0-29 6:52-57
 @ ./node_modules/colyseus/esm/Server.mjs 10:0-69 83:8-20 99:14-28
 @ ./node_modules/colyseus/esm/index.mjs 2:0-38 2:0-38
 @ ./src/rooms/MyRoom.ts 4:19-38
 @ ./src/arena.config.ts 11:17-42
 @ ./src/index.ts 16:39-64

ERROR in ./node_modules/redis-parser/lib/hiredis.js 3:14-32
Module not found: Error: Can't resolve 'hiredis' in '/Users/endel/Projects/colyseus/colyseus-webpack/node_modules/redis-parser/lib'
Did you mean './hiredis'?
Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (node_modules).
If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
 @ ./node_modules/redis-parser/lib/parser.js 344:20-40
 @ ./node_modules/redis-parser/index.js 3:0-40
 @ ./node_modules/redis/index.js 11:13-36
 @ ./node_modules/colyseus/esm/Server.mjs 17:0-15
 @ ./node_modules/colyseus/esm/index.mjs 2:0-38 2:0-38
 @ ./src/rooms/MyRoom.ts 4:19-38
 @ ./src/arena.config.ts 11:17-42
 @ ./src/index.ts 16:39-64
```

# Welcome to Colyseus!

This project has been created using [⚔️ `create-colyseus-app`](https://github.com/colyseus/create-colyseus-app/) - an npm init template for kick starting a Colyseus project in TypeScript.

[Documentation](http://docs.colyseus.io/)

## :crossed_swords: Usage

```
npm start
```

## Structure

- `index.ts`: main entry point, register an empty room handler and attach [`@colyseus/monitor`](https://github.com/colyseus/colyseus-monitor)
- `src/rooms/MyRoom.ts`: an empty room handler for you to implement your logic
- `src/rooms/schema/MyRoomState.ts`: an empty schema used on your room's state.
- `loadtest/example.ts`: scriptable client for the loadtest tool (see `npm run loadtest`)
- `package.json`:
    - `scripts`:
        - `npm start`: runs `ts-node-dev index.ts`
        - `npm run loadtest`: runs the [`@colyseus/loadtest`](https://github.com/colyseus/colyseus-loadtest/) tool for testing the connection, using the `loadtest/example.ts` script.
- `tsconfig.json`: TypeScript configuration file


## License

MIT
