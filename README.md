# React
React is a JavaScript library used for building user interfaces (UIs), particularly for single-page applications I am gona build ..


// setupMiddlewares: (middlewares, devServer) => {
//     if (!devServer) {
//         throw new Error('webpack-dev-server is not defined')
//     }

//     if (fs.existsSync(paths.proxySetup)) {
//         require(paths.proxySetup)(devServer.app)
//     }

//     middlewares.push(
//         evalSourceMapMiddleware(devServer),
//         redirectServedPath(paths.publicUrlOrPath),
//         noopServiceWorkerMiddleware(paths.publicUrlOrPath)
//     )

//     return middlewares;
// },