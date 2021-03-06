describe("ClickCounter is a class that counts clicks and turns them into donuts, a currency to enhance the ability to buy upgrades to your clicking button.", () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCounter();
    });
    describe("FEATURE : Have a way to count clicks, recording them as donuts.", () => {
        for (let i = 0; i < 10; i++) {
            it("Should record " + i + " click(s), increasing the donut count to " + i + ".", () => {
                expectOneToOneClickToDonutCount(i, underTest);
            });
        }
    });
    describe("FEATURE : Be able to purchase the first AutoClicker with 100 donuts from your donut count.", () => {
        it("New ClickCounter objects should have 0 AutoClickers.", () => {
            expect(underTest.getAutoClickerCount()).toBe(0);
        });
        it("Given a donut count of 100, purchasing an AutoClicker should reduce your donut total to 0.", () => {
            recordClicks(100, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 101, purchasing an AutoClicker should reduce your donut total to 1.", () => {
            recordClicks(101, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(1);
        });
        it("Given a donut count of 101, purchasing an AutoClicker should increase your AutoClicker total to 1.", () => {
            recordClicks(101, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getAutoClickerCount()).toBe(1);
        })
    });
    describe("FEATURE : The cost of each _Clicking Companion_ will go up with each purchase.", () => {
        /*
        > As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.
        - Increase the cost of the second _Clicking Companion_ by an additional ten percent to 110.
        - Increase the cost of every additional _Clicking Companion_ by an additional ten percent.
        */
        it("Given a donut count of 210, purchasing 2 clickers should decrease the donut count to 0.", () => {
            recordClicks(210, underTest);
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 331, purchasing 3 clickers should decrease the donut count to 0.", () => {
            recordClicks(331, underTest);
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
    });
});

function expectOneToOneClickToDonutCount(expectedClickCount, clickCounter) {
    recordClicks(expectedClickCount, clickCounter);
    expect(clickCounter.getDonutCount()).toBe(expectedClickCount);
}

function recordClicks(clickCount, clickCounter) {
    for (let i = 0; i < clickCount; i++) {
        clickCounter.recordClick();
    }
}