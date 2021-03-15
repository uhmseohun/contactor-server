import { Request, Response } from 'express';
import { HttpException } from '../../exceptions';
import { UserModel } from '../../models';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await new UserModel(req.body).save();
    res.json({ user });
  } catch (error) {
    if (error.code === 11000) {
      throw new HttpException(409, '같은 아이디를 사용 중인 사용자가 이미 있습니다.');
    }
  }
};
