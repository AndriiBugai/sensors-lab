Highcharts.chart('container_charts', {

    title: {
        text: 'Сила F1'
    },

    subtitle: {
        text: 'Зависимость результата от изменения значения параметров'
    },

    yAxis: {
        title: {
            text: 'Значения F1'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointInterval: 10
        }
    },

    series: [{
        name: 's1',
        data: calc_f1_values(50, 101, 10, 0),
		pointStart: 50
    }, {
        name: 's2',
        data: calc_f1_values(5, 51, 10, 1),
		pointStart: 5
    }, {
        name: 'z1',
        data: calc_f1_values(5, 51, 10, 2),
		pointStart: 5
    }, {
        name: 'z2',
        data: calc_f1_values(50, 101, 10, 3),
		pointStart: 50
    }]

});

function calc_f1_values(minValue, maxValue, step, paramIdx) {
	var defaultParamVal1 = 50;
	var defaultParamVal2 = 10;
	var defaultParamVal3 = 40;
	var defaultParamVal4 = 50;
	var resultF1Values = [];
	var paramValues = [defaultParamVal1, defaultParamVal2, defaultParamVal3, defaultParamVal4];
	var currentValue = minValue;
	while(currentValue < maxValue) {
		paramValues[paramIdx] = currentValue;
		// console.log(paramValues);
		resultF1Values.push(calculate_f1(paramValues[0],paramValues[1],paramValues[2],paramValues[3]));
		currentValue += step;
	}
	// console.log("_________");
	// console.log(resultF1Values);
	return resultF1Values;
}

function calculate_f1(s1,s2,z1,z2) {
    return ((s1 - s2) / (z2 - z1));
}