import type { GlobConfig, GlobEnvConfig } from '/@/types/config'

import { getShortName } from '../../../build/getShortName'
import { getGlobEnvConfig, isDevMode } from '/@/utils/env'

const ENV_NAME = getShortName(import.meta.env)

const ENV = ((isDevMode() ? getGlobEnvConfig() : window[ENV_NAME as any]) as unknown) as GlobEnvConfig

export const useGlobSetting = (): Readonly<GlobConfig> => {
  // const glob: Readonly<GlobConfig> = {
  //   title:
  // }
  console.log(ENV)
  return {} as GlobConfig
}
