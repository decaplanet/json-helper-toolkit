import fs from "node:fs";

import { checkJsonExists } from "../";

type ModifyJsonFunction = <T = any>(inputPath: string, inputData: T) => void;

const modifyJson: ModifyJsonFunction = (inputPath, inputData) => {
	const stringifiedData = JSON.stringify(inputData);

	const { path: jsonPath, isExists, isValidJson } = checkJsonExists(inputPath);
	if (isExists && isValidJson) {
		fs.writeFileSync(jsonPath, stringifiedData);
	}
};

export default modifyJson;
