import { Request, Response } from 'express';
import { HttpException } from '../../exceptions';
import { VaccineCenter } from '../../interfaces';
import { getDist } from '../../resources/coordinate';
import centers from './data.json';

export const getNearbyVaccineCenters = (req: Request, res: Response) => {
  if (!req.query.lat || !req.query.lng) throw new HttpException(
    400, '좌표 값이 전달되지 않았습니다.',
    );
  const coord = {
    lat: parseFloat(req.query.lat as string),
    lng: parseFloat(req.query.lng as string),
  };
  const sortedCenters = centers.sort((a: VaccineCenter, b: VaccineCenter) => (
    getDist(a, coord) - getDist(b, coord)
  ));

  res.json({ vaccineCenters: sortedCenters.slice(0, 5) });
};
