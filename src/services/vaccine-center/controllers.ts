import { Request, Response } from 'express';
import { HttpException } from '../../exceptions';
import { VaccineCenter } from '../../interfaces';
import { getDist } from '../../resources/coordinate';
import centers from './data.json';

export const getNearbyVaccineCenters = (req: Request, res: Response) => {
  if (!req.body.lat || !req.body.lng) throw new HttpException(
    400, '좌표 값이 전달되지 않았습니다.',
    );
    console.log(req.body)
  const coord = {
    lat: parseFloat(req.body.lat as string),
    lng: parseFloat(req.body.lng as string),
  };
  const sortedCenters = centers.sort((a: VaccineCenter, b: VaccineCenter) => (
    getDist(a, coord) - getDist(b, coord)
  ));

  res.json({ vaccineCenters: sortedCenters.slice(0, 5) });
};
