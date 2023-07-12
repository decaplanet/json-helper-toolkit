# json-helper-toolkit
A simple package that helps you read and write JSON files.

## Examples
### `modifyJson`, `readJson`
*src/test.json*
```json
{
  "name": "test-name"
}
```
*src/index.js*
```js
import { modifyJson, readJson } from "json-helper-toolkit";

// Path should be based on the current work directory.
// You can check the directory with "process.cwd()".
const [path, data] = readJson("src/test.json");

// Console : test-name
console.log(data.name);

modifyJson("src/test.json", { name: "changed-name", changed: true });

const [modifiedPath, modifiedData] = readJson("src/test.json");

if (modifiedData) {
	// Console : changed-name
	console.log(modifiedData.name);

	// Console : true
	console.log(modifiedData.changed);
}

```

### `checkJsonExists`
```js
import { checkJsonExists } from "json-helper-toolkit";

const {path, isExists, isValidJson} = checkJsonExists("src/test.json");

console.log(path);

if (isExists && isValidJson) {
	console.log("The provided Json file exists and it's valid!");
} else if (!isValidJson) {
	console.log(
		"The directory exists, but the provided file is not a valid Json file."
	);
}

```