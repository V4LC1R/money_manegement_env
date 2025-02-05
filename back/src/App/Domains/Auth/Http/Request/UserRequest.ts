import { z } from 'zod';
export class UserRequest {
  public static create(data: any) {
    return z.object({
        name: z.string().min(3).max(255),
        email: z.string().email(),
        password: z.string().min(6).max(255),
    }).parse(data);
  }
}