	angular
	.module('angular1')
	.controller('horsesCtrl', ['$scope', function(a) {
		a.title = 'Horses breeds';
		a.items = ['Andalusian', 'Barb', 'Friesian'];
		a.andalusian = {
			description: 'The Andalusian, also known as the Pure Spanish Horse or PRE (Pura Raza Española), is a horse breed from the Iberian Peninsula.',
			origin: 'Origin - Spain'
		}
		a.barb = {
			description: 'The Barb is a northern African breed with great hardiness and stamina. The Barb generally possesses a fiery temperament.',
			origin: 'Origin - North Africa'
		}
		a.friesian = {
			description: 'The Friesian is a horse breed originating in the Netherlands. Although the conformation of the breed resembles that a Friesians are graceful for their size.',
			origin: 'Origin - Netherlands'
		}

}]);