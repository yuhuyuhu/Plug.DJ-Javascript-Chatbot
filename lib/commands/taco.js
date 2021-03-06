// Generated by CoffeeScript 1.3.3
var tacoCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

tacoCommand = (function(_super) {

  __extends(tacoCommand, _super);

  function tacoCommand() {
    return tacoCommand.__super__.constructor.apply(this, arguments);
  }

  tacoCommand.prototype.init = function() {
    this.command = 'taco';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  tacoCommand.prototype.randomTaco = function() {
    var r, tacos;
    tacos = ["Mexican Pizza", "Chicken Soft Taco", "Double Decker Taco", "Volcano Taco Supreme", "Crunchy Taco Supreme", "Grilled Steak Soft Taco", "Cheesy Gordita Crunch", "Doritos Locos Taco"];
    r = Math.floor(Math.random() * tacos.length);
    return tacos[r];
  };

  tacoCommand.prototype.functionality = function() {
    var msg, taco, tacoName;
    msg = this.msgData.message;
    taco = this.randomTaco();
    if (msg.substring(5, 6) === "@") {
      tacoName = msg.substring(6);
      if (tacoName === '#Wolf Pup') {
        return API.sendChat("No thanks I'll get fat :(");
      } else {
        return API.sendChat("Yo @" + tacoName + ", " + this.msgData.from + " just gave you a " + taco + "!");
      }
    } else {
      return API.sendChat("Yo @" + this.msgData.from + ", here is your " + taco + "!");
    }
  };

  return tacoCommand;

})(Command);
