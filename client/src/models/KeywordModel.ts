import KeywordDto from '@services/Game/dto/KeywordDto';

export default class KeywordModel {
  id: number;
  name: string;

  constructor(dto: KeywordDto) {
    this.id = dto.id;
    this.name = dto.name;
  }

  static createFromApi(dtos: KeywordDto[]) {
    return dtos.map((dto) => new KeywordModel(dto));
  }
}
