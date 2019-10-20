/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/spanish-silver.csv", {
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var loans = ["Loans"];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
		loans.push(data[i][2]);
	}

	console.log(years);
	console.log(loans);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	loans
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);
