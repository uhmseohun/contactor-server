import { Request, Response } from 'express';
import { UserModel } from '../../models';
import { HttpException } from '../../exceptions';
import { issue as issueToken } from '../../resources/token';
import bcrypt from 'bcrypt';

interface Account {
  username: string;
  password: string;
};

export const verifyUser = async (req: Request, res: Response) => {
  const payload: Account = req.body;
  const user = await UserModel.findOne({ username: payload.username });
  if (!user) throw new HttpException(404, '요청된 사용자를 찾을 수 없습니다.');
  const { password: hashedPassword } = await UserModel.findOne({
    username: payload.username,
  }).select('password');
  const result = bcrypt.compareSync(payload.password, hashedPassword);
  if (!result) {
    throw new HttpException(401, '비밀번호가 일치하지 않습니다.');
  }
  const accessToken = await issueToken(user);
  res.json({
    identity: user,
    accessToken,
  });
};
