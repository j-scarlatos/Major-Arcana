const cards = ["0, The Fool", "I, The Magician", "II, The High Priestess", "V, The Heirophant", "VI, The Lovers", 
    "VIII, Strength", "X, The Wheel of Fortune", "XII, The Hanged Man", "XV, The Devil", "XVI, The Tower", 
    "XII, The Star", "XVIII, The Moon", "XIX, The Sun", "XXI, The World"];

const posCards = ["embark on a new journey", "uncover a secret", "find love in unexpected places", 
    "find good fortune", "overcome greed", "find new hope", "feel overwhelming joy"];

const negCards = ["losing yourself in perfectionism", "a test of faith", "taking on too much at once", "indecision", 
    "extreme changes", "controlling forces", "vicious cycles"];

const randomizedDay = () => {
    let x = Math.floor(Math.random() * 14);
    let y = Math.floor(Math.random() * 7);
    let cardSelection = cards[x];
    if (Number.isInteger (x / 2) === true) {
        let response = posCards[y];
        return ("Your card of the day is " + cards[x] + ". Today, you will " + response + "! Congrats!");
    } else {
        let response = negCards[y];
        return ("Your card of the day is " + cards[x] + ". Watch out for " + response + " today. Good luck!")
    }
}

console.log(randomizedDay());
console.log(randomizedDay());
console.log(randomizedDay());
console.log(randomizedDay());
console.log(randomizedDay());
console.log(randomizedDay());