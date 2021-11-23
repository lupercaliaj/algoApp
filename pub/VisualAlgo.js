function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
class BubbleSort {
    constructor() {
        this.data = this.useRandomList(50);
        this.xoffset = 10;
        this.yoffset = 400;
        this.parentElement = document.querySelector('body');

        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth - this.xoffset;
        this.canvas.height = window.innerHeight - this.yoffset;

        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = '10px serif';

    }

    setCanvas(xoffset, yoffset) {
        this.xoffset = xoffset;
        this.yoffset = yoffset;
    }

    useRandomList(length) {
        let result = []
        for (let i = 0; i < length; i++) {
            let num = Math.ceil(Math.random() * 100);
            result.push(num);
        }
        return result
    }
    setParent(element) {
        this.parentElement = element;
    }
    setData(list) {
        this.data = list;
    }
    initiate() {
        this.parentElement.appendChild(this.canvas);
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.data.length; i++) {
            this.ctx.fillRect(10 + 15 * i, this.canvas.height - 20, 10, -this.data[i]);
            this.ctx.fillText(this.data[i], 10 + 15 * i, this.canvas.height - 5);
        }
    }

    async sort() {
        this.render();
        await wait(50);
        let size = this.data.length;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size - 1 - i; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;

                    this.render();
                    await wait(50);
                }
            }
        }
    }

}
