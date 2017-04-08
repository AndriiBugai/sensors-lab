$(function() {
    document.getElementById('file-input').addEventListener('change', readSingleFile, false);
});

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        renderTests(contents);
    };
    reader.readAsText(file);
}

function renderTests(testDoc) {
    console.log(testDoc)
    var doc = JSON.parse(testDoc);
    var tests = doc.tests;
    tests.map(function(test) {
        console.log(test)
        var sampleTest = $('#sample-test').clone();
        sampleTest.find('.question_text').text(test.question);
        sampleTest.attr('data-correct-answer', test.correct);

        var sampleOption = sampleTest.find('.option');
        var optionIndex = 0;
        test.options.map(function(option) {
            currentOption = sampleOption.clone();
            currentOption.val(optionIndex);
            currentOption.attr('name', test.question);
            currentOption.show();
            optionIndex++;
            sampleTest.find(".test__question").append(currentOption);
            sampleTest.find(".test__question").append(option);
            sampleTest.find(".test__question").append('<br>')
        })


        sampleTest.show();
        $('.test__menu').append(sampleTest);
    });

    $('.test__item').find('.js-click-answer').click( function() {
        var question = $(this).closest('.test__item');
        var correctOption = question.attr('data-correct-answer');
        var selectedOption = question.find('input:checked').val();
        console.log(correctOption + " " + selectedOption);
        if(correctOption == selectedOption) {
            question.find('.correct').show();
            question.find('.incorrect').hide();
        } else {
            question.find('.correct').hide();
            question.find('.incorrect').show();
        }
    })

}

