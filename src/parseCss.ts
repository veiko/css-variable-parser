export default (content: string): Record<string, string>[] =>
  [...content.matchAll(/(--[A-z0-9-]*): ?(.*);/gi)].map((v) => ({
    key: v[1],
    value: v[2],
  }));
