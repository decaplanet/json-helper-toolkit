declare module "json-helper-toolkit" {
	const modifyJson: <T = any>(inputPath: string, inputData: T) => void;
	const readJson: <T = any>(
		inputPath: string
	) => [path: string, data: T | null];
	const checkJsonExists: (pathInput: string) => {
		isExists: boolean;
		isValidJson: boolean;
	};
}
