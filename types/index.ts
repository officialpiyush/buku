export interface BuildInfo {
  version: string
  commit: string
  time: number
  branch: string
  env: 'preview' | 'canary' | 'dev' | 'release'
}
