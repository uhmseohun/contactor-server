import { Request, Response } from 'express';
import { LocationLogModel } from '../../models';

interface LocationPayload {
  lat: number;
  lng: number;
};

export const createLocationLog = async (req: Request, res: Response) => {
  const payload: LocationPayload = req.body;
  const locationLog = await new LocationLogModel({
    location: {
      lat: payload.lat,
      lng: payload.lng,
    },
    user: req.user._id,
  }).save();
  res.json({ locationLog });
};
