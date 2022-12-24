import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671912019552 implements MigrationInterface {
    name = 'default1671912019552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_hotel" ("id" SERIAL NOT NULL, "nome" integer NOT NULL, "cnpj" integer NOT NULL, "pais" text NOT NULL, "estado" text NOT NULL, "cidade" text NOT NULL, CONSTRAINT "PK_c7790eb505adf0ac91e0b478d67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_reservas" ("id" SERIAL NOT NULL, "numeroreserva" integer NOT NULL, "apartamento" integer NOT NULL, "dataCheckIn" date NOT NULL, "dataCheckOut" date NOT NULL, "status" integer NOT NULL, "idhotel" integer, CONSTRAINT "PK_1ec24572f37959046ce280d48fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_hospedes" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "sobrenome" text NOT NULL, "idhospede" integer, CONSTRAINT "PK_1ba84a393556525f1fae189d78e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_reservas" ADD CONSTRAINT "FK_7b1f0115e08575268e2e81608d7" FOREIGN KEY ("idhotel") REFERENCES "tb_hotel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tb_hospedes" ADD CONSTRAINT "FK_e328441dad2c91cb22298404c87" FOREIGN KEY ("idhospede") REFERENCES "tb_reservas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_hospedes" DROP CONSTRAINT "FK_e328441dad2c91cb22298404c87"`);
        await queryRunner.query(`ALTER TABLE "tb_reservas" DROP CONSTRAINT "FK_7b1f0115e08575268e2e81608d7"`);
        await queryRunner.query(`DROP TABLE "tb_hospedes"`);
        await queryRunner.query(`DROP TABLE "tb_reservas"`);
        await queryRunner.query(`DROP TABLE "tb_hotel"`);
    }

}
