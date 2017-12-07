let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
	constructor (name) {
		this.id = ++driverId;
		this.name = name;

		store.drivers.push(this);
	}

	trips() {
		return store.trips.filter(trip => {
			return trip.driverId === this.id;
		})
	}

	passengers() {
			let allPassengers = [];
			let trips = this.trips();
			return store.passengers.filter(passenger => {
				for(let trip of trips) {
					if (trip.passengerId === passenger.id) {
						return passenger;
					}
				}	
			})
			
			
		}	
}

class Passenger {
	constructor (name) {
		this.id = ++passengerId;
		this.name = name;

		store.passengers.push(this);
	}

	trips() {
		return store.trips.filter(trip => {
			return trip.passengerId === this.id;
		})
	}

	drivers() {
		let allDrivers = [];
		let trips = this.trips();
		return store.drivers.filter(driver => {
			for(let trip of trips) {
				if (trip.driverId === driver.id) {
					return driver;
				}
			}	
		})

	}
}

class Trip {
	constructor (driver, passenger) {
		this.id = ++tripId;
		if(driver) {
			this.driverId = driver.id;
		}
		if(passenger) {
			this.passengerId = passenger.id;
		}
		store.trips.push(this);
	}

	passenger() {
		return store.passengers.find( passenger => {
			return this.passengerId === passenger.id;
		})
	}

	driver() {
		return store.drivers.find(driver => {
			return this.driverId === driver.id;
		})
	}

}