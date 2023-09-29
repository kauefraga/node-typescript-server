# Path Aliases

> Path aliases are, as the name, a way to rename the paths and simplify absolute ones, by mapping them.

Without path aliases:

```ts
import { User } from '../../../../../../models/user';
import { Database } from '../../../../infra/database';
import { CreateUserUseCase } from '../../../../../usecases/user';

// ...
```

With path aliases:

```ts
import { User } from '@models/user';
import { Database } from '@infra/database';
import { CreateUserUseCase } from '@usecases/user';

// ...
```

[Typescript configuration](../tsconfig.json):

```json
{
  "baseUrl": "./src",
  "paths": {
    "@core/*": ["./core/*"],
    "@http/*": ["./http/*"],
    "@infra/*": ["./infra/*"],
  },
}
```

Either `tsx` and `tsup` can resolve those paths.

Here's a good resource about it: https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports

[Vitest configuration](../vitest.config.ts):

```ts
import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
});
```

The Stack Overflow question that lead me to that: https://stackoverflow.com/questions/72468249/vitest-src-folder-alias-not-resolved-in-test-files
