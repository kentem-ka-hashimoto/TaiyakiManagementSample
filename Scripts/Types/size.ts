// サイズ型
const Size = {
  S: 0,
  M: 1,
  L: 2,
} as const;
type Size = typeof Size[keyof typeof Size];


export default Size;