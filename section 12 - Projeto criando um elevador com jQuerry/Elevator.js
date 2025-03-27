class Elevator {
  constructor() {
    this.$elevator = $(".elevator");
  }

  openDoor() {
    if (this.isDoorOpen()) {
      return true;
    } else {
      this.$elevator.find(".door").addClass("open");
    }
  }

  closeDoor() {
    if (this.isDoorOpen()) {
      this.$elevator.find(".door").removeClass("open");
    } else {
      return true;
    }
  }

  isDoorOpen() {
    let door = this.$elevator.find(".door");
    return door.hasClass("open");
  }
}
