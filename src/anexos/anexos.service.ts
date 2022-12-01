import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateAnexoDto } from './dto/create-anexo.dto';
import { UpdateAnexoDto } from './dto/update-anexo.dto';
import { Storage } from '@google-cloud/storage';


@Injectable()
export class AnexosService {
  private storage: Storage;
  private bucketName: string;
  private exemploEnv: string;

  constructor(configService: ConfigService) {

    this.storage = new Storage({
      keyFilename: __dirname +'/key-apis-backend.json',
      //keyFilename: 'apis-backend-880b0b1f87c7.json',
      projectId: 'apis-backend',
    });

    this.bucketName = 'soultech-files';

    this.exemploEnv = configService.get<string>('pokemonService.apiKey')// exemplo para variavel de ambiente

  }


  create(createAnexoDto: CreateAnexoDto) {
    return 'This action adds a new anexo';
  }

  async findAll(idProntuario: string, idUsuario: string) {
    // https://cloud.google.com/storage/docs/samples/storage-list-files-with-prefix?hl=pt-br

    // The directory prefix to search for
    const prefix = `paciente/user-${idUsuario}/prontuario-${idProntuario}/`;

    // The delimiter to use
    const delimiter = '/';

    const options = {
      prefix: prefix,
      delimiter: delimiter,
    };

    //Lists files in the bucket
    const [files] = await this.storage
      .bucket(this.bucketName)
      .getFiles(options);

      console.log(files)

    const filesList = [];

    

    files.forEach((file) => {
      // Split prontuario/['file']

      
      const [prefix, name, prontuario, pathName] = file.name.split('/');

      filesList.push({
        id: file.id,
        name: name,
        pathName: pathName,
        prefix: prefix,
        link: file.metadata.mediaLink,
      });
    });

    if(filesList) return filesList;
    else throw new HttpException("Customer Not Found!", HttpStatus.BAD_REQUEST);
    
  }

  
  async handleUpload(idProntuario: string, idUsuario: string, profile: Express.Multer.File) {
    // console.log(idProntuario)
    // console.log('files:', profile);
    // console.log('files:', profile.path);
    // console.log('files:', profile.originalname);

    const filePath = profile.path;
    const fileOriginalName = profile.originalname;
    
    // The new ID for your GCS file
    const destFileName = `paciente/user-${idUsuario}/prontuario-${idProntuario}/${fileOriginalName}`;

    const options = {
      destination: destFileName, // Local do destino no bucket
    };

    const res = await this.storage
      .bucket(this.bucketName)
      .upload('./' + filePath, options);

    if(res) return res;
    else throw new HttpException("Customer Not Found!", HttpStatus.BAD_REQUEST);
  }
  
  async getFileDownload(file: string) {
    //https://uros-randelovic.medium.com/how-to-upload-a-file-to-google-bucket-and-generate-a-link-to-the-file-from-node-js-server-54a7104928d

    // O ID do seu arquivo GCS - your-file-name
    const fileOriginalName = file;
    // The new ID for your GCS file
    const destFileName = `prontuarios/${fileOriginalName}`;

    // Downloads the file
    const contents = await this.storage
      .bucket(this.bucketName)
      .file(destFileName)
      .download();

    const generatePublicUrl = (bucketName, folderName) => {
      let publicUrl =
        'https://storage.googleapis.com/' + bucketName + '/' + folderName;
      return publicUrl;
    };

    return generatePublicUrl(this.bucketName, destFileName);

    /* 
    function generatePublicUrl(fileName, bucketName, folderName) {
        let publicUrl = "https://storage.googleapis.com/" + bucketName + "/" + folderName + "/" + fileName
        console.log(publicUrl)
        return publicUrl
    }
    */

  }
  async handleUploadAvatar(idUsuario: string, profile: Express.Multer.File) {
    console.log('files:', profile);
    console.log('files:', profile.path);
    console.log('files:', profile.originalname);

    const filePath = profile.path;
    const fileOriginalName = profile.originalname;

    // The new ID for your GCS file
    const destFileName = `paciente/user-${idUsuario}/avatar/${fileOriginalName}`;

    const options = {
      destination: destFileName, // Local do destino no bucket
    };

    const res = await this.storage
      .bucket(this.bucketName)
      .upload('./' + filePath, options);
    // `mediaLink` is the URL for the raw contents of the file.
    //const url = res[0].metadata.mediaLink;

    console.log(res);

    return 'File upload API:' + JSON.stringify(res);
  }

  async soultechUpload(file: Express.Multer.File) {

    const filePath = file.path;
    const fileOriginalName = file.originalname;

    // The new ID for your GCS file
    const destFileName = `prontuarios/${fileOriginalName}`;

    const options = {
      destination: destFileName, // Local do destino no bucket
    };

    const res = await this.storage
      .bucket(this.bucketName)
      .upload('./' + filePath, options);
    // `mediaLink` is the URL for the raw contents of the file.
    //const url = res[0].metadata.mediaLink;

    console.log(res);

    return 'File upload API:' + JSON.stringify(res);
  }

  async deleteFile(idProntuario: string, idUsuario: string, idFile: string) {
    // O ID do seu arquivo GCS - your-file-name
    const fileOriginalName = idFile;
    // The new ID for your GCS file
    const destFileName = `paciente/user-${idUsuario}/prontuario-${idProntuario}/${fileOriginalName}`;

    await this.storage.bucket(this.bucketName).file(destFileName).delete();

    return `gs://${this.bucketName}/${destFileName} deleted`;
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
