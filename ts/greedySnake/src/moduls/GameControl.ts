import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';

    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {

        this.direction = event.key
        console.log(this.direction)
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
        }
        this.checkEat(x, y)
        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e: any) {
            //  alert(e.message)
            alert(e.message + 'Game over');
            this.isLive = false;
        }


        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }


    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            console.log('吃到食物了')
            // 食物的位置重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇增加一节
            this.snake.addBody();
        }
    }

}

export default GameControl;