class ScorePanel {
    score = 0;
    level = 0;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upLevel: number;

    constructor(maxLevel: number = 10, upLevel: number = 10) {
        this.maxLevel = maxLevel;
        this.upLevel=upLevel;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    // 增加分数
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if (this.score % this.upLevel === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel;