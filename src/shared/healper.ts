import { Request } from 'express'
import { extname } from 'path';

export class Helper{

    static customFilaName(req: Request, file: Express.Multer.File, callback:any){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = extname(file.originalname)
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`

        console.log(filename)

        callback(null, filename)
        
        return filename
    }
}