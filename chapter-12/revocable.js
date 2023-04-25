'use-strict';
//Revocable Proxy can restrict access to an object after some time after the condition is met. In this example, the counter is able to count for 100 miliseconds in 20 milisecond intervals before the proxy is revoked and the calls to increment no longer work.
const counterFactory = function() {
    class Counter {
        constructor() {
            this.value = 0;
        }
        increment() {
            this.value += 1;
        }
        get count() {
            return this.value;
        }
    }
    const { proxy, revoke } = Proxy.revocable(new Counter(), {});
    const leaseTime = 100;
    setTimeout(revoke, leaseTime);

    return proxy;
};

const counter = counterFactory();

const incrementAndDisplay = function() {
    try {
        counter.increment();
        console.log(counter.count);
        setTimeout(incrementAndDisplay, 20);
    } catch (ex) {
        console.log(ex.message);
    }
};

incrementAndDisplay();
