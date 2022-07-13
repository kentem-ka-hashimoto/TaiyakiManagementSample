// 種類の型
const taiyakiKind = {
  Usually: 0,
  Custard: 1,
  Deluxe: 2,
} as const;
type taiyakiKind = typeof taiyakiKind[keyof typeof taiyakiKind];

export default taiyakiKind;