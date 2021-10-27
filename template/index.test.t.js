let { postapl } = require('postapl');

let plugin = require('./');

async function run(input, output, opts) {
  input = JSON.stringify(input, null, 2);
  output = JSON.stringify(output, null, 2);

  let result = await postapl([plugin(opts)]).process(input, { from: undefined });
  expect(result.apl).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

/* Write tests here

it('does something', async () => {
  const input = require('./testdata/input1.json');
  const output = require('./testdata/output1.json');
  const opts = {};

  await run(input, output, opts);
})

*/

