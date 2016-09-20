angular
	.module('angular1')
	.controller('catsCtrl', ['$scope', function(a) {
		a.title = 'Wild cats';
		a.items = ['Cougar', 'Cheetah', 'Jaguar'];
		a.coguar = {
			description: 'The cougar (Puma concolor), also commonly known as the mountain lion, puma, panther, or catamount, is a large felid of the subfamily Felinae.',
			origin: 'Origin - North America'
		}
		a.cheetah = {
			description: 'The cheetah, also known as the hunting leopard, is a big cat that occurs mainly in eastern and southern Africa and a few parts of Iran.',
			origin: 'Origin - South Africa'
		}
		a.jaguar = {
			description: 'The jaguar (Panthera onca) is a big cat, a feline in the Panthera genus, and is the only extant Panthera species native to the Americas.',
			origin: 'Origin - South America'
		}

}]);