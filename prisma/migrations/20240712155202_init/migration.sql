-- CreateTable
CREATE TABLE "Graph" (
    "date" TIMESTAMP(3) NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Graph_pkey" PRIMARY KEY ("date")
);
