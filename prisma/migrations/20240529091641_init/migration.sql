-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walletaddress" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Walletaddress_pkey" PRIMARY KEY ("id")
);
