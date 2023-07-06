import fs from "node:fs";
import path from "path";

type ReadJsonFunction = <T = any>(
	inputPath: string
) => [path: string, data: T | null];

const readJson: ReadJsonFunction = (pathInput) => {
	const callerPath = process.cwd();
	const outputPath = path.resolve(callerPath, pathInput);
	const outputData = JSON.parse(fs.readFileSync(outputPath, "utf8"));

	if (outputData) {
		return [outputPath, outputData];
	} else {
		return [outputPath, null];
	}
};

export default readJson;
