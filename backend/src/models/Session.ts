export default class Session {
  userId: string;
  token: string;
  expireAt: Date;
  lifetime = 30 * 24 * 60 * 60 * 1000;

  constructor({ 
    userId,
    token,
    expireAt
  }: {
    userId: string,
    token?: string,
    expireAt?: Date
  }) {
    const nowDate = new Date();

    this.userId = userId;
    this.token = token ?? crypto.randomUUID();
    this.expireAt = expireAt ?? new Date(nowDate.getTime() + this.lifetime);
  }

  extend() {
    const nowDate = new Date();
    this.expireAt = new Date(nowDate.getTime() + this.lifetime);
  }

  revoke() {
    this.expireAt = new Date();
  }
}
