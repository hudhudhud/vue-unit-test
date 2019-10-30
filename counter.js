// counter.js

export default {
    template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,

    data() {
        return {
            count: 0,
            str: 'mm'
        }
    },

    methods: {
        increment() {
            this.count++;
            this.test(this.count)
        },
        test(a) {
            this.str = a + 'test'
        }
    }
}