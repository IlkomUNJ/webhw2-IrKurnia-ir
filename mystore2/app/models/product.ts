import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column()
  public description!: string

  @column()
  public price!: number

  @column()
  public slug!: string

  @column()
  public image!: string
}
