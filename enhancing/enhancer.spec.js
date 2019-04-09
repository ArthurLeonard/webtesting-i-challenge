const enhancer = require('./enhancer.js');
// test away!

let user = {
    name: 'Gilbert',
    enhancement: 20,
    durability: 97
}

describe('enhancer', () => {
    describe('repair()', () => {
        it('should restore durability', () => {
            expect(enhancer.repair(user).durability).toBe(100);
        })
    }); // describe repair


    describe('succeed()', () => {
        
        it('should increment enhancement', () => {
            enhancementLevel = user.enhancement;
            console.log(enhancementLevel);
            if ( enhancementLevel !== 20)
                expect(enhancer.succeed(user).enhancement).toBe(enhancementLevel+1)
            else 
                expect(enhancer.succeed(user).enhancement).toBe(20);
        })

    }); // describe success 

    describe('fail()', () => {
        it('should decrement attributes', () => {
            let item = {
                name: 'Wilbur',
                enhancement: 4,
                durability: 7
            }
            durability = item.durability;
            enhancement = item.enhancement;
            console.log(durability, enhancement);
                if( enhancement < 15)
                    expect(enhancer.fail(item).durability).toBe(durability - 5);
                else 
                    expect(enhancer.fail(item).durability).toBe(durability - 10);
                if( enhancement > 16)
                    expect(enhancer.fail(item).enhancement).toBe(enhancement - 1)
                if( enhancement === 0)
                    expect(enhancer.fail(item).enhancement).toBe(0);
        })
    }); //describe fail

}); // end outer describe