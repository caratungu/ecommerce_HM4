import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Role } from "src/roles.enum";

export class AssignRolDto {
    @IsNotEmpty()
    @ApiProperty({
        description: 'Id de usuario para asignar rol',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
    })
    userId: string;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Indicar rol que se desea asignar al usuario (SuperAdministrador:super_admin - Administrador:admin - Usuario:user)',
        example: 'User'
    })
    rol: Role;
}