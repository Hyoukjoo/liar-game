import UserModel from '@models/UserModel';

export const ENTRIES = [
  new UserModel({
    id: 0,
    nickname: '자양동 꿀주먹',
    email: 'test1@test.com',
    createdAt: '2021-4-5',
    updatedAt: '2021-4-10',
  }),
  new UserModel({
    id: 1,
    nickname: '신갈동 엽떡귀신',
    email: 'test2@test.com',
    createdAt: '2021-4-5',
    updatedAt: '2021-4-10',
  }),
  new UserModel({
    id: 2,
    nickname: '동탄 푸드파이터',
    email: 'test3@test.com',
    createdAt: '2021-4-5',
    updatedAt: '2021-4-10',
  }),
  new UserModel({
    id: 3,
    nickname: '역삼동 칼퇴근',
    email: 'test4@test.com',
    createdAt: '2021-4-5',
    updatedAt: '2021-4-10',
  }),
  new UserModel({
    id: 4,
    nickname: '종각 종잡이',
    email: 'test5@test.com',
    createdAt: '2021-4-5',
    updatedAt: '2021-4-10',
  }),
];
