declare module "json-helper-toolkit" {
	const modifyJson: <T = any>(inputPath: string, inputData: T) => void;
	const readJson: <T = any>(inputPath: string) => [path: string, data: T];
}
