export default async (ctx: any, next: Function) => {
  const userId = await ctx.state.session.get('userId');
  if (!userId) {
    ctx.throw(403);
  }
  await next();
}
