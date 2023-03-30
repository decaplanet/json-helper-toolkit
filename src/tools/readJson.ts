import fs from "node:fs";
import path from "path";

export type ReadJsonFunction = <T = any>(
	inputPath: string
) => [path: string, data: T];

const readJson: ReadJsonFunction = (pathInput) => {
	const callerPath = process.cwd();
	const outputPath = path.resolve(callerPath, pathInput);
	const outputData = JSON.parse(fs.readFileSync(outputPath, "utf8"));

	return [outputPath, outputData];
};

export default readJson;
