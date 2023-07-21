import path from 'node:path'
import { getStoryContext, TestRunnerConfig } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postRender(page, context) {
    const browserName = page.context().browser()?.browserType().name()
    const story = await getStoryContext(page, context)

    if (story.parameters.skipImageSnapshot) return

    const storyFilePath = story.parameters.fileName

    const customSnapshotsDir = path.resolve(
      process.cwd(),
      storyFilePath,
      `../__snapshots__/images/${browserName}`,
    )

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready)

    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    })
  },
}

export default config
