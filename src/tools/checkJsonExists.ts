import fs from "node:fs";
import path from "path";

type CheckJsonExistsFunction = (inputPath: string) => {
	path: string;
	isExists: boolean;
	isValidJson: boolean;
};

const checkJsonExists: CheckJsonExistsFunction = (inputPath) => {
	const callerPath = process.cwd();
	const outputPath = path.resolve(callerPath, inputPath);

	const isExists = Boolean(fs.existsSync(outputPath));
	let isValidJson: boolean;

	try {
		isValidJson = Boolean(JSON.parse(fs.readFileSync(outputPath, "utf8")));
	} catch (e) {
		isValidJson = false;
	}

	return { path: outputPath, isExists, isValidJson };
};

export default checkJsonExists;
