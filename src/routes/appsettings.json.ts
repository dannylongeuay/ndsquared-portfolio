export async function get(): Promise<{ body: any }> {
	return {
		body: {
			PYAPI_BASE_URL: process.env['PYAPI_BASE_URL'],
			GOAPI_BASE_URL: process.env['GOAPI_BASE_URL']
		}
	};
}
