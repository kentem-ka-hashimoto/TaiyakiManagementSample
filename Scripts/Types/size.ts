// サイズ型
const taiyakiSize = {
  S: 0,
  M: 1,
  L: 2,
} as const;
type taiyakiSize = typeof taiyakiSize[keyof typeof taiyakiSize];

export default taiyakiSize;
