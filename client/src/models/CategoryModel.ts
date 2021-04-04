import CategoryDto from '@services/Game/dto/CategoryDto';
import KeywordModel from './KeywordModel';

export default class CategoryModel {
  id: number;
  name: string;
  keywords: KeywordModel[];

  constructor(dto: CategoryDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.keywords = dto.keywords && KeywordModel.createFromApi(dto.keywords);
  }
}
