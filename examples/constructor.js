const animalForRelease1 = {
    name: 'Tilly',
    species: 'tiger',
    weightKg: 56,
    age: 2,
    dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
    name: 'Nelly',
    species: 'elephant',
    weightKg: 320,
    age: 16,
    dateOfRelease: '03-02-2022'
}

// this refers to new object we are creating
function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease
    this.summarizeAnimal = function(){
        console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`)
    }
}

const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)
// outputs summary to console
tillyTheTiger.summarizeAnimal()
nellyTheElephant.summarizeAnimal()

// -----------------------------------------------------------------

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: '240',
    costPerNightChild: 180
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: '120',
    costPerNightChild: 180
}

function NationalParkHotels(data){
    // this.name = data.name
    // this.rooms = data.rooms
    // this.stars = data.stars
    // this.costPerNightAdult = data.costPerNightAdult
    // this.costPerNightChild = data.costPerNightChild
    // copy an object using Object.assign
    // assigns everything inside data to this
    Object.assign(this, data)
    this.summarizeHotel = function(){
        const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild *2
        console.log(`A one night stay 
        at the ${this.name} for two adults and two children costs a 
        total of ${totalPrice}`)
    }
}

const safariHotel = new NationalParkHotels(hotel1)
const leopardHotel = new NationalParkHotels(hotel2)
safariHotel.summarizeHotel()
leopardHotel.summarizeHotel()

// copy an object using Object.assign practice

const sandraKayeProfileData = {
	name: 'Sandra Kaye',
	portfolio: 'www.sandrasportfolio.com',
	currentJob: 'Google',
	currentSalary: '400k'	
}

/*
Challenge
1. Use Object.assign to cut 4 lines of code from the constructor function.
*/


function DevProfile(data){
	// this.name = data.name
	// this.portfolio = data.portfolio
	// this.currentJob = data.currentJob
	// this.currentSalary = data.currentSalary
    Object.assign(this, data)
	this.summariseDev = function(){
	console.log(`${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`)
}
}

const sandraKaye = new DevProfile(sandraKayeProfileData)
sandraKaye.summariseDev()

