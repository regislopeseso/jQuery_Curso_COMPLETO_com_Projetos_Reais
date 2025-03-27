class Elevator {
  constructor() {
    this.$elevator = $(".elevator");
    this.floorQtd = 3;
  }

  openDoor() {
    return new Promise((resolve, reject) => {
      if (this.isDoorOpen()) {
        resolve();
      } else {
        this.$elevator.find(".door").addClass("open");
        resolve();
      }
    });
  }

  closeDoor() {
    return new Promise((resolve, reject) => {
      if (this.isDoorOpen()) {
        this.$elevator.find(".door").removeClass("open");
        resolve();
      } else {
        resolve();
      }
    });
  }

  isDoorOpen() {
    let door = this.$elevator.find(".door");
    return door.hasClass("open");
  }

  goToFloor(number) {
    this.closeDoor().then(() => {
      new Promise((resolve, reject) => {
        this.removeFloorClasses();

        let currentFloor = this.$elevator.data("floor");

        let diff = number - currentFloor;

        let movDuration = diff * 2;

        this.$elevator.addClass(`floor${number}`);

        this.$elevator.data("floor", number);

        this.$elevator.css("-webkit-transition-duration", `${movDuration}s`);

        this.$elevator.on(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transionend",
          () => {
            resolve();
          }
        );
      }).then(() => {
        this.openDoor();

        setTimeout(() => {
          this.closeDoor();
        }, 3000);
      });
    });
  }

  removeFloorClasses() {
    for (let i = 1; i <= this.floorQtd; i++) {
      this.$elevator.removeClass(`floor${i}`);
    }
  }
}
