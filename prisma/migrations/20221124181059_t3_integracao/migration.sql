-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" TEXT NOT NULL,
    "pre_requisito" TEXT NOT NULL,
    "equivalente" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_codigo_key" ON "products"("codigo");
