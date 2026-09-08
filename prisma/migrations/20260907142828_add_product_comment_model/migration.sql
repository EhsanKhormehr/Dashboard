-- CreateTable
CREATE TABLE "ProductComment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT,
    "userId" TEXT,
    "status" "CommentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ProductComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductComment" ADD CONSTRAINT "ProductComment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductComment" ADD CONSTRAINT "ProductComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
