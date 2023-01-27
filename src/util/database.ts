import { PrismaClient } from "@prisma/client/edge"
import type { IJob } from "./job.interface";

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: "prisma://aws-eu-central-1.prisma-data.com/?api_key=T7eTxa0vERI02U9TXPjUETxLb7c0GqRW9Etd8PR1Sd64tfzMD13Evb-2QVMV2vzd"
      }
    }
})

export async function getjj() {
  const result=await prisma.job.findMany({})
  return result;
}
export async function addJob(job:IJob){
  const {company,title,link,email,type,deadline,logo,skills}=job;
  try{
    const result= await prisma.job.create({
      data:{
        company,
        title,
        link,
        email,
        type,
        deadline,
        logo,
        skills,
      }
    })
    console.log(result);
    return result;
  }
  catch(err){
    return err.message;
  }
}
export async function auth(prvToken : any) {
  const Token=prvToken.value;
  const result=await prisma.lister.findFirst({
    where:{
      token: Token
    }
  })
  return result;
}