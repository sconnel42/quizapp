var addQuestionButton = document.querySelector('#addButton');

function addShortAnswer(listElement) {
    console.log('Add short answer');
    var next_num = listElement.children.length + 1;
    var li = document.createElement("li");
    li.innerHTML = "Question Title: <input type='text' name='q" + next_num +"Title'><br>";
    listElement.appendChild(li);
}

function addLongAnswer(listElement) {
    console.log('Add long answer');
    var next_num = listElement.children.length + 1;
    var name = 'q' + next_num + 'Long';
    var li = document.createElement("li");
    li.innerHTML = "<span class='qLabel'><label for='" + name + "'>Question " + next_num + "</label></span>";
    li.innerHTML += "<span class='question'><textarea id= '" + name + "' name='" + name + "' rows='4' cols='50'></textarea></span>";
    listElement.appendChild(li);
}

function addMultipleChoice(listElement) {
    var next_num = listElement.children.length + 1;
    var li = document.createElement("li");
    li.innerHTML = "Question Title: <input type='text' name='q" + next_num + "Title'><br>Choice 1: <input type='text' name='q" + next_num + "C1'><br>Choice 2: <input type='text' name='q" + next_num + "C2'><br>";
    listElement.appendChild(li);
}

var qTypes = {
    'short': addShortAnswer,
    'long': addLongAnswer,
    'multiple': addMultipleChoice
};

function addNewQuestion(questionType) {
    console.log(questionType);
    var list = document.querySelector("ul");
    qTypes[questionType](list);
}

//addQuestionButton.addEventListener('click', function(e) {
//    var list = document.querySelector("ul");
//    addLongAnswer(list);
//});
