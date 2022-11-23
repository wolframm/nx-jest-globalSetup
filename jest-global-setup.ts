import { registerTsProject } from 'nx/src/utils/register';
const cleanupRegisteredPaths = registerTsProject('.', 'tsconfig.base.json');

import { someSetupLib } from '@myorg/some-setup-lib';
export default async function () {
  someSetupLib();
}
// make sure to run the clean up!
cleanupRegisteredPaths();
