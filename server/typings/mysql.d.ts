interface mysql {
  query<T>(sql: string, param?: string | number | Array<string | number>) : Promise<T>;
}