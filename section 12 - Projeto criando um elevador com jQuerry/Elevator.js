class Elevator {
  constructor() {
    this.$elevator = $(".elevator");
    this.floorQtd = 3;
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

  goToFloor(number) {
    this.removeFloorClasses();

    let currentFloor = this.$elevator.data("floor");

    let diff = number - currentFloor;

    let movDuration = diff * 2;

    this.$elevator.addClass(`floor${number}`);

    this.$elevator.data("floor", number);

    this.$elevator.css("-webkit-transition-duration", `${movDuration}s`);
  }

  removeFloorClasses() {
    for (let i = 1; i <= this.floorQtd; i++) {
      this.$elevator.removeClass(`floor${i}`);
    }
  }
}
