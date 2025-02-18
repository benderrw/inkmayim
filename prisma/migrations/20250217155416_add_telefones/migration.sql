-- CreateTable
CREATE TABLE `Telefones` (
    `id` VARCHAR(191) NOT NULL,
    `contatoId` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_contatoId_fkey` FOREIGN KEY (`contatoId`) REFERENCES `Contatos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
