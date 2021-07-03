import { Table,Column,Model } from "sequelize-typescript";
import { DataTypes } from "sequelize/types";

@Table
export class Teacher extends Model<Teacher>{
  @Column({
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
  })
  name:string

  @Column({
    type:DataTypes.ENUM(),
    values:['A','B','C','S'],
    allowNull:false
  })
  level:string
}