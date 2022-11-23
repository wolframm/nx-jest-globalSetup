import {someLib} from "@myorg/some-lib";

export function someSetupLib(): string {
  console.log(someLib());
  return 'some-setup-lib';
}
