# json-helper-tools
A simple pacakge that helps you read and write JSON files.

## Examples
*src/test.json*
```json
{
  "name": "test-name"
}
```
*src/index.js*
```js
import { modifyJson, readJson } from "json-helper-tools";

// Path should be based on the current work directory.
// You can check the directory with "process.cwd()".
const [path, data] = readJson("src/test.json");

// Console : test-name
console.log(data.name);

modifyJson("src/test.json", { name: "changed-name", changed: true });

const [modifiedPath, modifiedData] = readJson("src/test.json");

// Console : changed-name
console.log(modifiedData.name);

// Console : true
console.log(modifiedData.changed);
```