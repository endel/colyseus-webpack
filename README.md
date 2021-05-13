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
