function calc_f1_values(minValue, maxValue, step, paramIdx) {
	console.clear();
	var defaultParamVal1 = 50;
	var defaultParamVal2 = 10;
	var defaultParamVal3 = 40;
	var defaultParamVal4 = 50;
	var resultF1Values = [];
	var paramValues = [defaultParamVal1, defaultParamVal2, defaultParamVal3, defaultParamVal4];
	var currentValue = minValue;
	while(currentValue < maxValue) {
		paramValues[paramIdx] = currentValue;
		console.log(paramValues);
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

$(document).ready(function() {
    reloadF1();
});

function reloadF1() {
	//f1Chart.series[0].setData(calc_f1_values(parseInt($("#f1_s1_min").val()), parseInt($("#f1_s1_max").val()), parseInt($("#f1_step").val()), 0), true);
	//f1Chart.series[1].setData(calc_f1_values(parseInt($("#f1_s2_min").val()), parseInt($("#f1_s2_max").val()), parseInt($("#f1_step").val()), 1), true);
	//f1Chart.series[2].setData(calc_f1_values(parseInt($("#f1_z1_min").val()), parseInt($("#f1_z1_max").val()), parseInt($("#f1_step").val()), 2), true);
	//f1Chart.series[3].setData(calc_f1_values(parseInt($("#f1_z2_min").val()), parseInt($("#f1_z2_max").val()), parseInt($("#f1_step").val()), 3), true);
	//f1Chart.plotOptions.pointInterval = parseInt($("#f1_step").val());

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
            pointInterval: parseInt($("#f1_step").val())
        }
    },

    series: [{
        name: 's1',
        data: calc_f1_values(parseInt($("#f1_s1_min").val()), parseInt($("#f1_s1_max").val()), parseInt($("#f1_step").val()), 0),
        pointStart: 50
    }, {
        name: 's2',
        data: calc_f1_values(parseInt($("#f1_s2_min").val()), parseInt($("#f1_s2_max").val()), parseInt($("#f1_step").val()), 1),
        pointStart: 5
    }, {
        name: 'z1',
        data: calc_f1_values(parseInt($("#f1_z1_min").val()), parseInt($("#f1_z1_max").val()), parseInt($("#f1_step").val()), 2),
        pointStart: 5
    }, {
        name: 'z2',
        data: calc_f1_values(parseInt($("#f1_z2_min").val()), parseInt($("#f1_z2_max").val()), parseInt($("#f1_step").val()), 3),
        pointStart: 50
    }]

});
}