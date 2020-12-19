let computer1 = {
    ram: 4,
    enable: true,
    processator: "Intel Core I5",
    hard_disk: "500",
    install: function () {
        return "Puedo instalar";
    },
    unnistall: function () {
        return this.processator;
    }
}
let computer2 = {
    ram: 0,
    enable: true,
    processator: "Intel Core I5",
    hard_disk: "500",
    getRam: function () {
        return this.ram;
    },
    setRam: function (ram) {
        this.ram = ram ;
    }
}
computer2.enable = false;
computer1.refrigeration = true;
console.log("computer1", computer1);
console.log("computer2", computer2);
class Airplane {
    name = 0;
    aceleration = 0;
    passengers = 0;
    greet() {
        return "Hello";
    }
}
a319 = new Airplane();
a319.name = "A319";
a319.aceleration = 10;
a319.desaceleration = 5;
a319.passengers = 144;
a380 = new Airplane();
a380.name = "A380";
a380.aceleration = 20;
a380.desaceleration = 15;
a380.passengers = 370;
console.log(a380.greet() + ". The airplane " + a380.name + " with a capacity of " + a380.passengers + " passengers");
console.log(a319.greet() + ". The airplane " + a319.name + " with a capacity of " + a319.passengers + " passengers");
