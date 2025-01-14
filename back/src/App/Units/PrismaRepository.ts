import { IRepository } from "@myTypes/Interfaces";


export class PrismaRepository<T> implements IRepository<T> {
    private model: any;
  
    constructor(model: any) {
      this.model = model;
    }
  
    async first():Promise<T | null> {
      return await this.model.findFirst();
    }

    async findById(id: number): Promise<T | null> {
      return await this.model.findUnique({ where: { id } });
    }
  
    async findAll(): Promise<T[]> {
      return await this.model.findMany();
    }
  
    async create(data: any): Promise<T> {
      return await this.model.create({ data });
    }
  
    async update(id: number, data: any): Promise<T | null> {
      return await this.model.update({
        where: { id },
        data,
      });
    }
  
    async delete(id: number): Promise<boolean> {
      const result = await this.model.delete({ where: { id } });
      return result ? true : false;
    }

    async deleteAll():Promise<boolean> {
      const result = await this.model.deleteMany({where:{}});
      return result ? true : false;
    }
  }