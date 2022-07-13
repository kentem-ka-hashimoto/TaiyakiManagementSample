// 種類の型
const taiyakiKind = {
  Usually: '通常たい焼き',
  Custard: 'カスタード',
  Deluxe: 'デラックスたい焼き',
} as const;
type taiyakiKind = typeof taiyakiKind[keyof typeof taiyakiKind];

export default taiyakiKind;