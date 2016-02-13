function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  this.render();
  this.clickHandler();
}

module.exports = FollowToggle;

FollowToggle.prototype.render = function () {

  if(this.followState === "followed") {
    this.$el.text("unfollow");
  } else {
    this.$el.text("follow");
  }
};

FollowToggle.prototype.clickHandler = function () {
  var followToggle = this;

  // event.preventDefault();

  this.$el.on("click", function(e) {

    if (followToggle.followState === 'followed'){
      $.ajax({
        url: "/users/" + followToggle.userId + "/follow",
        type: "DELETE"
      });
      followToggle.followState = "unfollowed";
    } else {
      $.ajax({
        url: "/users/" + followToggle.userId + "/follow",
        type: "POST"
      });
      followToggle.followState = "followed";
    }
    followToggle.render();
  });

};
