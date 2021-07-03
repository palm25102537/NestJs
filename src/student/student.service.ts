import { Injectable } from '@nestjs/common';
const  util  = require('util')
const fs = require('fs')

let readFile = util.promisify(fs.readFile)
let writeFile = util.promisify(fs.writeFile)
@Injectable()
export class StudentService {
  // getStudent() {
  //   return {id:"11",name:"Palm",level:'A'};
  // }
  // getHi(arg):string{
  //   const{id}=arg
  //   return "Hi "+id
  // }
  async getStudent():Promise<string>{
      const allStudentData = await readFile('./src/student_info.json','utf8')
      return JSON.parse(allStudentData)   
  }

  async getStudentById(id){
    const data = await readFile('./src/student_info.json','utf8')
    const studentData = JSON.parse(data)
    const idx = studentData.findIndex((item)=>item.id === Number(id))
    if(idx === -1) return 'Can not found this student'
    return studentData[idx]
  }

async createStudent(body){
  const {name,level} = body
  const data = await readFile('./src/student_info.json','utf8')
  const studentData = JSON.parse(data)
  const id = studentData[studentData.length-1].id + 1
  const newStudent = {id,name,level}
  const addNewStudent = [...studentData,newStudent]
  
  await writeFile('./src/student_info.json',JSON.stringify(addNewStudent))

  return {message:'Created',newStudent}
}

  async editStudent(body,id){
    const {name,level} = body
    
    const jsonStudentData = await readFile('./src/student_info.json','utf8')
    const studentData = JSON.parse(jsonStudentData)
    
    const idx = studentData.findIndex((item)=>item.id === +id)

    if(name) studentData[idx].name = name.trim()
    if(level) studentData[idx].level = level

    await writeFile('./src/student_info.json',JSON.stringify(studentData))

    const afterUpdate = await readFile('./src/student_info.json','utf8')
    
    const afterUpdateData = JSON.parse(afterUpdate)

    return {message:'Updated',data:afterUpdateData[idx]}
    
   
  }

  async deleteStudent(id){
    console.log(id)
    const jsonStudentData = await readFile('./src/student_info.json','utf8')
    const studentData =  JSON.parse(jsonStudentData)
    const remainStudent = studentData.filter((item)=>item.id !== Number(id))
    await writeFile('./src/student_info.json',JSON.stringify(remainStudent))
    return {message:`Student ID ${id} is deleted`}
  }
}
