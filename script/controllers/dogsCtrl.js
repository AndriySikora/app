angular
	.module('angular1')
	.controller('dogsCtrl', ['$scope', function(a) {
		a.title = 'Great Dogs';
		a.items = ['Pembroke Welsh Corgi', 'Jack Russell Terrier',
'Japanese Chin'];
		a.corgi = {
			description: 'The Pembroke Welsh Corgi has erect ears which are proportional to the equilateral triangle of the head. The ears should also be firm, medium in size.',
			origin: 'Origin - Wales'
		}
		a.terrier = {
			description: 'The Jack Russell Terrier is a small terrier that has its origins in fox hunting. It is principally white-bodied and smooth, rough or broken-coated.',
			origin: 'Origin - England'
		}
		a.chin = {
			description: 'The Japanese Chin (Japanese: 狆, chin), also known as the Japanese Spaniel,is a dog acknowledged for its importance to Japanese nobility.',
			origin: 'Origin - Japan'
		}

}]);