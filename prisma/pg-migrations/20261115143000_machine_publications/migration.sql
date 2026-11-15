CREATE TABLE "WebsitePublication" (
  id TEXT PRIMARY KEY, kind TEXT NOT NULL, target TEXT NOT NULL, "expectedVersion" TEXT NOT NULL,
  "sourceIds" JSONB NOT NULL, "sourceHash" TEXT NOT NULL, payload JSONB NOT NULL,
  before JSONB, "appliedVersion" TEXT, status TEXT NOT NULL DEFAULT 'DRAFT', error TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL
);
CREATE INDEX "WebsitePublication_status_createdAt_idx" ON "WebsitePublication" (status, "createdAt");
CREATE INDEX "WebsitePublication_kind_target_idx" ON "WebsitePublication" (kind, target);
