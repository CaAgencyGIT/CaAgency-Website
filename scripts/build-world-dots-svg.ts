// Writes public/images/site/world-dots-v1.svg from lib/data/world-map-dots.ts.
// Run: npx tsx scripts/build-world-dots-svg.ts
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { WORLD_DOTS_SRC, worldDotsSvg } from '../lib/data/world-dots-svg'

writeFileSync(path.join(process.cwd(), 'public', WORLD_DOTS_SRC), worldDotsSvg())
