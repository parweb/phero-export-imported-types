import { readFileSync } from 'fs';
import { join } from 'path';

(async () => {
  console.log(join(__dirname, '/sample/index.ts'));

  // const code = readFileSync(join(__dirname, '/sample/index.ts'));

  // console.log({ code });

  // const ast = parse(code.toString(), {
  //   loc: true,
  //   range: true
  // });

  // console.log(JSON.stringify(ast, null, 2));
})();
