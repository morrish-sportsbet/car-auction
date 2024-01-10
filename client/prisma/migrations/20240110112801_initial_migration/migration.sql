-- CreateTable
CREATE TABLE "Auction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reservePrice" INTEGER NOT NULL,
    "seller" TEXT NOT NULL,
    "winner" TEXT,
    "soldAmount" INTEGER NOT NULL,
    "currentHighBid" INTEGER NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "auctionEnd" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL
);
