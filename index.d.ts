declare module "json-helper-tools" {
	const modifyJson: <T = any>(inputPath: string, inputData: T) => void;
	const readJson: <T = any>(inputPath: string) => [path: string, data: T];
}
