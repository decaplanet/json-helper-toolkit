import fs from "node:fs";
import path from "path";

type CheckJsonExistsFunction = (pathInput: string) => {
	isExists: boolean;
	isValidJson: boolean;
};

const checkJsonExists: CheckJsonExistsFunction = (pathInput: string) => {
	const callerPath = process.cwd();
	const outputPath = path.resolve(callerPath, pathInput);

	const isExists = Boolean(fs.existsSync(outputPath));
	let isValidJson: boolean;

	try {
		isValidJson = Boolean(JSON.parse(fs.readFileSync(outputPath, "utf8")));
	} catch (e) {
		isValidJson = false;
	}

	return { isExists, isValidJson };
};

export default checkJsonExists;
