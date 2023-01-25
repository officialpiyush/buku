// ELK: MIT License
import Git from 'simple-git'
import { isDevelopment } from 'std-env'

export { version } from '../package.json'

/**
 * Environment variable `VERCEL_GIT_PULL_REQUEST_ID` provided by Vercel.
 *
 * Whether triggered by a GitHub PR
 */
export const isPR = process.env.VERCEL_GIT_PULL_REQUEST_ID !== ''

/**
 * Environment variable `VERCEL_GIT_COMMIT_REF` provided by Vercel.
 *
 * Git branch
 */
export const gitBranch = process.env.VERCEL_GIT_COMMIT_REF

/**
 * Environment variable `VERCEL_ENV` provided by Vercel.
 *
 * Whether triggered by PR, `preview` or `development`.
 */
export const isPreview = isPR || ['preview', 'development'].includes(process.env.VERCEL_ENV || '')

const git = Git()
export const getGitInfo = async () => {
  const branch = gitBranch || await git.revparse(['--abbrev-ref', 'HEAD'])
  const commit = await git.revparse(['HEAD'])
  return { branch, commit }
}

export const getEnv = async () => {
  const { commit, branch } = await getGitInfo()
  const env = isDevelopment
    ? 'dev'
    : isPreview
      ? 'preview'
      : branch === 'main'
        ? 'canary'
        : 'release'
  return { commit, branch, env } as const
}
