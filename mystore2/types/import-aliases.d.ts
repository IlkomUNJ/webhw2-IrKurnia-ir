declare module '@ioc:Adonis/Lucid/Orm' {
  export class BaseModel { }
  export function column(options?: any): any
}

declare module '#models/*' {
  const m: any
  export default m
}

declare module '#controllers/*' { const c: any; export default c }
declare module '#start/*' { const s: any; export default s }
declare module '#config/*' { const c: any; export default c }
