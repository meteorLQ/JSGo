import './style/index.less'

import Food from "./moduls/Food";
import ScorePanel from "./moduls/ScorePanel";


let score = new ScorePanel(200,10);
var food = new Food();
food.change()
for (let i = 0; i < 99; i++) {
    score.addScore()
}