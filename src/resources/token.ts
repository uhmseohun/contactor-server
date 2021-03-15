import jwt from 'jsonwebtoken';
import { User } from '../interfaces';
import config from '../config';
import { HttpException } from '../exceptions';

export const verify = async (token: string) => {
  try {
    const { identity }: any = await jwt.verify(
      token,
      config.jwtSecret as string,
    );
    return identity;
  } catch (error) {
    if (['jwt malformed', 'invalid signature'].includes(error.message)) {
      throw new HttpException(401, '토큰이 변조되었습니다.');
    } else throw new HttpException(401, '전송된 토큰에 문제가 있습니다.');
  }
};

export const issue = async (identity: User) => {
  const token = await jwt.sign(
    identity,
    config.jwtSecret as string,
    {
      algorithm: 'HS512',
      expiresIn: 0,
    },
  );
  return token;
};
