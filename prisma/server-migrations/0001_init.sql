-- CreateTable
CREATE TABLE IF NOT EXISTS "Talent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'instagram',
    "instagramUrl" TEXT,
    "tiktokUrl" TEXT,
    "youtubeUrl" TEXT,
    "twitchUrl" TEXT,
    "kickUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "slug" TEXT NOT NULL,
    "bio" TEXT
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "featuredImage" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "publishedAt" DATETIME,
    "author" TEXT NOT NULL DEFAULT 'CA Agency',
    "categories" JSONB NOT NULL DEFAULT '[]',
    "tags" JSONB NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "SiteContent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Talent_name_key" ON "Talent"("name");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Talent_slug_key" ON "Talent"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Talent_category_idx" ON "Talent"("category");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Talent_order_idx" ON "Talent"("order");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Talent_slug_idx" ON "Talent"("slug");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Post_slug_idx" ON "Post"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Post_status_idx" ON "Post"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Post_publishedAt_idx" ON "Post"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "SiteContent_key_key" ON "SiteContent"("key");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "SiteContent_key_idx" ON "SiteContent"("key");

