import { basename } from "path";

import { INativeScriptPlatform } from "../helpers/platform";
import { getProjectRootPath } from "../helpers/project";
import { env } from '../';

function sanitizeName(appName: string): string {
	return appName.split("").filter((c) =>
		/[a-zA-Z0-9]/.test(c)
	).join("");
}
function getDistPath() {
	const appName = sanitizeName(basename(getProjectRootPath()));
	return `${env.buildPath ?? "platforms"}/ios/${appName}/app`;
}

const iOSPlatform: INativeScriptPlatform = {
	getDistPath,
}

export default iOSPlatform;
