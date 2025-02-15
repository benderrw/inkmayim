-- CreateTable
CREATE TABLE `Contato` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Contato_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mensagens` (
    `id` VARCHAR(191) NOT NULL,
    `contatoId` VARCHAR(191) NOT NULL,
    `mensagem` VARCHAR(191) NOT NULL,
    `imagens` JSON NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Galeria` (
    `id` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NOT NULL,
    `src` VARCHAR(191) NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Galeria_src_key`(`src`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mensagens` ADD CONSTRAINT `Mensagens_contatoId_fkey` FOREIGN KEY (`contatoId`) REFERENCES `Contato`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
