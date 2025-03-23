<template>
    <div>
        <button @click="startPrinting">开始打印</button>
        <p>{{ currentChar }}</p>
    </div>
</template>

<script>
class Queue {
    constructor() {
        this.items = [];
    }

    // 入队操作  
    enqueue(element) {
        this.items.push(element);
    }

    // 出队操作并返回元素  
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    // 检查队列是否为空  
    isEmpty() {
        return this.items.length === 0;
    }
}

export default {
    data() {
        return {
            queue: new Queue(),
            text: "Hello, Vue.js!",
            currentChar: '',
            printingInterval: null,
        };
    },
    methods: {
        startPrinting() {
            // 停止之前的打印（如果有的话）  
            if (this.printingInterval) {
                clearInterval(this.printingInterval);
            }

            // 清空当前字符和队列  
            this.currentChar = '';
            this.queue.items = [];

            // 将字符串的每个字符入队  
            for (let char of this.text) {
                this.queue.enqueue(char);
            }

            // 开始打印  
            this.printingInterval = setInterval(() => {
                const char = this.queue.dequeue();
                if (char) {
                    this.currentChar = char;
                } else {
                    // 队列为空，停止打印  
                    clearInterval(this.printingInterval);
                    this.printingInterval = null;
                }
            }, 500); // 例如，每500毫秒打印一个字符  
        },
    },
    beforeDestroy() {
        // 在组件销毁前停止打印  
        if (this.printingInterval) {
            clearInterval(this.printingInterval);
        }
    },
};
</script>