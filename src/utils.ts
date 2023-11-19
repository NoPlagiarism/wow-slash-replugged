export function randChoice<T>(arr: T[]): T {
  return arr[~~(Math.random() * arr.length)]
}
