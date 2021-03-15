import { createSchema, Type, typedModel } from 'ts-mongoose';
import bcrypt from 'bcrypt';

const userSchema = createSchema({
  username: Type.string({ required: true, unique: true }),
  password: Type.string({ required: true, select: false }),
  name: Type.string({ required: true }),
  phone: Type.string({ required: true }),
  birthdate: Type.string({ required: true }),
  address: Type.object({ required: true }).of({
    street: Type.string({ required: true, trim: true }),
    detail: Type.string({ required: true, trim: true }),
  }),
}, { versionKey: false, timestamps: true });

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) next(error);
      bcrypt.hash(this.get('password'), salt, (error, hash) => {
        if (error) next(error);
        this.set('password', hash);
        next();
      })
    })
  }
});

const UserModel = typedModel('User', userSchema);

export { userSchema, UserModel };
