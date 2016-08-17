cancelUnless(me, "You are not logged in", 401);
if (!me.admin && !isMe(this.id)) {
  cancel("You are not authorized to do that", 401);
}