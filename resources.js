function mkFighter(name, speed, strength, fighterPoints) {
    this.name = name;
    this.speed = speed;
    this.strength = strength;
    this.fighterPoints = fighterPoints;
    this.moveSet = [];
};

function execution(up, down, left, right){
    this.UP = up || 38;
    this.DOWN = down || 40;
    this.LEFT = left || 37;
    this.RIGHT = right || 39;
};

function specialExecution(up,down,left,right){
    var exec = new execution(up,down,left,right);
    var UP, DOWN, LEFT, RIGHT, UP_RIGHT, DOWN_RIGHT, DOWN_LEFT, UP_LEFT;
    UP = exec.UP; DOWN = exec.DOWN; LEFT = exec.LEFT; RIGHT = exec.RIGHT;
    this.QRT_CIRCLE_F = [DOWN,[DOWN,RIGHT],RIGHT];
    this.QRT_CIRCLE_B = [DOWN,[DOWN,LEFT],LEFT];
    this.HALF_CIRCLE_F = [LEFT,[LEFT,DOWN],DOWN,[DOWN,RIGHT],RIGHT];
    this.HALF_CIRCLE_B = [RIGHT,[RIGHT,DOWN],DOWN,[DOWN,LEFT],LEFT];
    this.DRAGON_F = [RIGHT,DOWN,[DOWN,RIGHT]];
    this.DRAGON_B = [LEFT,DOWN,[DOWN,LEFT]];
    this.CHARGE_B_F = [LEFT,RIGHT];
    this.CHARGE_D_U = [DOWN,UP];
    // TODO: FULL CIRCLE F / B
};

function mkMove(name, execution, speed, strength, cost) {
    this.name = name;
    this.execution = execution;
    this.speed = speed;
    this.strength = strength;
    this.cost = cost;
};