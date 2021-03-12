import KeywordDto from "./KeywordDto";

export default interface CategoryDto {
  id: number;
  name: string;
  keywords: KeywordDto[];
}
