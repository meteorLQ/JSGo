class Snake {
    // 表示蛇的元素
    head: HTMLElement;

    bodies: HTMLCollection;

    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value) {
        if (this.X === value) {
            return
        }


        if (value < 0 || value > 290) {
            throw new Error('游戏结束！');
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();

    }

    set Y(value) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('游戏结束！');
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }


        // 移动身体
        this.moveBody();

        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 添加一个蛇身体移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i - 1] as HTMLElement).style.left = X + 'px';
            (this.bodies[i - 1] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 0; i < this.bodies.length; i++) {
            let body = this.bodies[i] as  HTMLElement;
            if (this.X===body.offsetLeft && this.Y===body.offsetTop){
                throw new Error('撞到自己了～～～～～～～')
            }
            
        }

    }

}

export default Snake;