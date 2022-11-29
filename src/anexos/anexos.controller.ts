import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Helper } from 'src/shared/healper';
import { AnexosService } from './anexos.service';
import { CreateAnexoDto } from './dto/create-anexo.dto';
import { UpdateAnexoDto } from './dto/update-anexo.dto';

@Controller('anexos')
export class AnexosController {
  constructor(private readonly anexosService: AnexosService) {}

  @Post()
  create(@Body() createAnexoDto: CreateAnexoDto) {
    return this.anexosService.create(createAnexoDto);
  }

  @Post(':idProntuario/:idUsuario/post-file')
  @UseInterceptors(
    FileInterceptor('profile', {
      storage: diskStorage({
        destination: './files/paciente',
        filename: Helper.customFilaName,
      }),
    }),
  )
  handleUpload(
    @Param('idProntuario') idProntuario: string,
    @Param('idUsuario') idUsuario: string,
    @UploadedFile() profile) {
    return this.anexosService.handleUpload(idProntuario, idUsuario, profile);
  }

  @Post(':idUsuario/post-file-avatar')
  @UseInterceptors(
    FileInterceptor('profile', {
      storage: diskStorage({
        destination: './files/paciente',
        filename: Helper.customFilaName,
      }),
    }),
  )
  handleUploadAvatar(
    @Param('idUsuario') idUsuario: string,
    @UploadedFile() profile) {
    return this.anexosService.handleUploadAvatar(idUsuario, profile);
  }

  @Get('/download/:file')
  getFileDownload(@Param('file') file: string) {
    return this.anexosService.getFileDownload(file);
  }

  @Get(':idProntuario/:idUsuario/list-file')
  findAll(
    @Param('idProntuario') idProntuario: string,
    @Param('idUsuario') idUsuario: string,
  ) {
    return this.anexosService.findAll(idProntuario, idUsuario);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anexosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnexoDto: UpdateAnexoDto) {
    return this.anexosService.update(+id, updateAnexoDto);
  }

  @Delete(':idFile/:idProntuario/:idUsuario')
  deleteFile(
    @Param('idFile') idFile: string,
    @Param('idProntuario') idProntuario: string,
    @Param('idUsuario') idUsuario: string,
  ) {
    console.log(idFile);
    return this.anexosService.deleteFile(idProntuario,idUsuario,idFile);
  }
}
