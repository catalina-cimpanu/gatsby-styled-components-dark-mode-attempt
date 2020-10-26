First attempt, by using

```
const darkTheme = {
  mainColor: "topaz",
  secondaryColor: "ruby",
}

export default darkTheme
```

getting the following error:

```
catal@Catalina MINGW64 ~/Catalina/Learning stuff/Web development/Experiments/Gatsby-experiments/dark-mode-gatsby/gatsby-styled-components-dark-mode-attempt (master)
$ gatsby develop

 ERROR #10123  CONFIG

We encountered an error while trying to load your site's gatsby-config. Please fix the error and try again.



  Error: C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\src\themes\lightThe  me.js:6
  export default lightTheme
  ^^^^^^
  SyntaxError: Unexpected token 'export'

  - v8-compile-cache.js:226 NativeCompileCache._moduleCompile
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:226:18

  - v8-compile-cache.js:172 Module._compile
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:172:36

  - loader.js:1035 Object.Module._extensions..js
    internal/modules/cjs/loader.js:1035:10

  - loader.js:879 Module.load
    internal/modules/cjs/loader.js:879:32

  - loader.js:724 Function.Module._load
    internal/modules/cjs/loader.js:724:14

  - loader.js:903 Module.require
    internal/modules/cjs/loader.js:903:19

  - v8-compile-cache.js:159 require
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:159:20

  - gatsby-config.js:14 Object.<anonymous>
    C:/Users/catal/Catalina/Learning stuff/Web development/Experiments/Gatsby-experiments/dark-mode-gatsby/gatsby-styled-components-dark-mode-attempt/gatsby-config.js:14:16

  - v8-compile-cache.js:178 Module._compile
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:178:30

  - loader.js:1035 Object.Module._extensions..js
    internal/modules/cjs/loader.js:1035:10

  - loader.js:879 Module.load
    internal/modules/cjs/loader.js:879:32

  - loader.js:724 Function.Module._load
    internal/modules/cjs/loader.js:724:14

  - loader.js:903 Module.require
    internal/modules/cjs/loader.js:903:19

  - v8-compile-cache.js:159 require
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:159:20

  - get-config-file.ts:30 getConfigFile
    [gatsby-styled-components-dark-mode-attempt]/[gatsby]/src/bootstrap/get-config-file.ts:30:20


not finished open and validate gatsby-configs - 0.145s
```

Second error:

```
$ gatsby develop

 ERROR #10123  CONFIG

We encountered an error while trying to load your site's gatsby-config. Please fix the error and try again.



  Error: Cannot find module 'C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt  /src/theme.js'
  Require stack:
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\gatsby-config.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \bootstrap\get-config-file.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \bootstrap\load-themes\index.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \services\initialize.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \services\index.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \state-machines\develop\services.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \state-machines\develop\index.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\node_modules\gatsby\dist  \commands\develop-process.js
  - C:\Users\catal\Catalina\Learning stuff\Web development\Experiments\Gatsby-experiments\dark-mode-gatsby\gatsby-styled-components-dark-mode-attempt\.cache\tmp-20096-pqDLM05  KvyQl

  - loader.js:831 Function.Module._resolveFilename
    internal/modules/cjs/loader.js:831:15

  - loader.js:687 Function.Module._load
    internal/modules/cjs/loader.js:687:27

  - loader.js:903 Module.require
    internal/modules/cjs/loader.js:903:19

  - v8-compile-cache.js:159 require
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:159:20

  - gatsby-config.js:14 Object.<anonymous>
    C:/Users/catal/Catalina/Learning stuff/Web development/Experiments/Gatsby-experiments/dark-mode-gatsby/gatsby-styled-components-dark-mode-attempt/gatsby-config.js:14:16

  - v8-compile-cache.js:178 Module._compile
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:178:30

  - loader.js:1035 Object.Module._extensions..js
    internal/modules/cjs/loader.js:1035:10

  - loader.js:879 Module.load
    internal/modules/cjs/loader.js:879:32

  - loader.js:724 Function.Module._load
    internal/modules/cjs/loader.js:724:14

  - loader.js:903 Module.require
    internal/modules/cjs/loader.js:903:19

  - v8-compile-cache.js:159 require
    [gatsby-styled-components-dark-mode-attempt]/[v8-compile-cache]/v8-compile-cache.js:159:20

  - get-config-file.ts:30 getConfigFile
    [gatsby-styled-components-dark-mode-attempt]/[gatsby]/src/bootstrap/get-config-file.ts:30:20

  - initialize.ts:113 initialize
    [gatsby-styled-components-dark-mode-attempt]/[gatsby]/src/services/initialize.ts:113:50

  - interpreter.js:707 Interpreter.exec
    [gatsby-styled-components-dark-mode-attempt]/[xstate]/lib/interpreter.js:707:27

  - interpreter.js:210 Interpreter.execute
    [gatsby-styled-components-dark-mode-attempt]/[xstate]/lib/interpreter.js:210:22

  - interpreter.js:230 Interpreter.update
    [gatsby-styled-components-dark-mode-attempt]/[xstate]/lib/interpreter.js:230:18


not finished open and validate gatsby-configs - 0.300s
```
