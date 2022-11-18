import { Injectable } from '@nestjs/common';
import { CreateAnexoDto } from './dto/create-anexo.dto';
import { UpdateAnexoDto } from './dto/update-anexo.dto';
import { Storage} from "@google-cloud/storage";

@Injectable()
export class AnexosService {

  private storage: Storage;
  private bucketName : string;

  constructor() {
    this.storage = new Storage({ keyFilename: "apis-backend-880b0b1f87c7.json", projectId: 'apis-backend', });
    this.bucketName = 'soultech-files';
  }

  create(createAnexoDto: CreateAnexoDto) {
    return 'This action adds a new anexo';
  }

  findAll() {
    return `This action returns all anexos`;
  }
  
  async handleUpload(file: Express.Multer.File){
    console.log('files:', file)
    console.log('files:', file.path)
    console.log('files:', file.originalname)

    const filePath = file.path

    const res = await this.storage.bucket(this.bucketName).upload('./' + filePath);
    // `mediaLink` is the URL for the raw contents of the file.
    const url = res[0].metadata.mediaLink;

    // Need to make the file public before you can access it.
    //await this.storage.bucket(this.bucketName).file(filePath).makePublic();

    // Make a request to the uploaded URL.
    //const axios = require('axios');
    //const pkg = await axios.get(url).then(res => res.data);
    //pkg.name; // 'masteringjs.io'

    return 'File upload API:' + JSON.stringify(res)
  }

  findOne(id: number) {
    return `This action returns a #${id} anexo`;
  }

  update(id: number, updateAnexoDto: UpdateAnexoDto) {
    return `This action updates a #${id} anexo`;
  }

  remove(id: number) {
    return `This action removes a #${id} anexo`;
  }
}
