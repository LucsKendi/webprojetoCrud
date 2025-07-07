import { ClasseMod2 } from '../../entities/ClasseMod2'; 
declare global {
  namespace Express {
    interface Request {
      user?: ClasseMod2;
    }
  }
}
