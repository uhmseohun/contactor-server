import { createSchema, Type, typedModel } from 'ts-mongoose';
import { userSchema } from './user';

const locationLogSchema = createSchema({
  location: Type.object({ required: true }).of({
    lat: Type.number({ required: true }),
    lng: Type.number({ required: true }),
  }),
  user: Type.ref(Type.objectId({ required: true })).to('User', userSchema),
}, { versionKey: false, timestamps: true });

const LocationLogModel = typedModel('LocationLog', locationLogSchema);

export { locationLogSchema, LocationLogModel };
