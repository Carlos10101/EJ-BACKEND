import { Controller, Get } from '@nestjs/common';

@Controller('client')
export class ClientController {

    @Get()
    getClients(){
        return({id:1, nombre:'nombre 1', direccion:'direccion 1'})
    }

}
