const Blockchain = require('./blockchain');

const myChain = new Blockchain();

//console.log('mining block 1 ->');
myChain.addBlock(`Data:
    - Name = Doctor
    - Age = N/A
    - Planet of origin = Galifrey`);

//console.log('mining block 2 ->');
myChain.addBlock(`Data:
    - Name = Rory Williams (Pond)
    - Age = 37 Earth Years
    - Planet of origin = Earth`);
    
//console.log('mining block 3 ->');
myChain.addBlock(`Data:
    - Name = Matthew
    - Age = 14
    - Planet of origin = Mars`);

console.log(myChain);