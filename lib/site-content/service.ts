import { prisma } from '@/lib/prisma'
import {
    siteContentDefinitions,
    siteContentDefinitionsByKey,
} from '@/lib/site-content/definitions'
import { deepMergeWithDefaults } from '@/lib/site-content/merge'

export type SiteContentKey = keyof typeof siteContentDefinitionsByKey

type SiteContentListItem = {
  key: string
  title: string
  description: string
  updatedAt: Date | null
}

function hasUsablePrismaConnection() {
  if (process.env.DATABASE_URL?.startsWith('file:')) return true
  const url = process.env.PRISMA_DATABASE_URL
  return Boolean(url && url !== 'prisma://dummy.prisma-data.net')
}

export async function listSiteContentEntries(): Promise<SiteContentListItem[]> {
  const client = prisma as any

  if (!hasUsablePrismaConnection()) {
    return siteContentDefinitions.map((definition) => ({
      key: definition.key,
      title: definition.title,
      description: definition.description,
      updatedAt: null,
    }))
  }

  try {
    const items = await client.siteContent.findMany({
      select: { key: true, updatedAt: true },
    }) as Array<{ key: string; updatedAt: Date }>

    const updatedMap = new Map(items.map((item) => [item.key, item.updatedAt]))

    return siteContentDefinitions.map((definition) => ({
      key: definition.key,
      title: definition.title,
      description: definition.description,
      updatedAt: updatedMap.get(definition.key) ?? null,
    }))
  } catch (error) {
    console.error('Error listing site content:', error)
    return siteContentDefinitions.map((definition) => ({
      key: definition.key,
      title: definition.title,
      description: definition.description,
      updatedAt: null,
    }))
  }
}

export async function getSiteContent<T>(key: string): Promise<T> {
  const definition = siteContentDefinitionsByKey[key]
  if (!definition) {
    throw new Error(`Unknown site content key: ${key}`)
  }

  if (!hasUsablePrismaConnection()) {
    return definition.defaultData as T
  }

  const client = prisma as any

  try {
    const entry = await client.siteContent.findUnique({
      where: { key },
      select: { data: true },
    }) as { data: T } | null

    const defaultData = definition.defaultData as T
    if (!entry?.data) return defaultData
    return deepMergeWithDefaults(defaultData as object, entry.data) as T
  } catch (error) {
    console.error(`Error loading site content for ${key}:`, error)
    return definition.defaultData as T
  }
}

export async function saveSiteContent<T>(key: string, data: T) {
  const definition = siteContentDefinitionsByKey[key]
  if (!definition) {
    throw new Error(`Unknown site content key: ${key}`)
  }

  if (!hasUsablePrismaConnection()) {
    throw new Error('Missing PRISMA_DATABASE_URL')
  }

  const client = prisma as any

  return client.siteContent.upsert({
    where: { key },
    create: {
      key,
      data: data as object,
    },
    update: {
      data: data as object,
    },
  })
}
