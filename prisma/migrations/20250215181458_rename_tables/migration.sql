/*
  Warnings:

  - You are about to drop the `contato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `mensagens` DROP FOREIGN KEY `Mensagens_contatoId_fkey`;

-- DropIndex
DROP INDEX `Mensagens_contatoId_fkey` ON `mensagens`;

-- DropTable
DROP TABLE `contato`;

-- CreateTable
CREATE TABLE `Contatos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Contatos_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mensagens` ADD CONSTRAINT `Mensagens_contatoId_fkey` FOREIGN KEY (`contatoId`) REFERENCES `Contatos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
