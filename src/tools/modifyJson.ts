import fs from "node:fs";

import readJson from "./readJson";

type ModifyJsonFunction = <T = any>(inputPath: string, inputData: T) => void;
const modifyJson: ModifyJsonFunction = (inputPath, inputData) => {
	const [jsonPath] = readJson(inputPath);
	const stringified = JSON.stringify(inputData);
	if (fs.existsSync(jsonPath)) {
		fs.writeFileSync(jsonPath, stringified);
	}
};

export default modifyJson;
