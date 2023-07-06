import fs from "node:fs";
import path from "path";

type ReadJsonFunction = <T = any>(
	inputPath: string
) => [path: string, data: T | null];

const readJson: ReadJsonFunction = <T = any>(inputPath: string) => {
	const callerPath = process.cwd();
	const outputPath = path.resolve(callerPath, inputPath);

	let outputData: T;
	try {
		outputData = JSON.parse(fs.readFileSync(outputPath, "utf8"));
		return [outputPath, outputData];
	} catch (e: any) {
		return [outputPath, null];
	}
};

export default readJson;
