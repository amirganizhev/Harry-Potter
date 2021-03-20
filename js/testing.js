/*Кнопка вывода результата*/
const result = document.querySelector('.result');

result.onclick = () => {

	/*Переменные вопросов*/
	const doorQuestion = document.querySelectorAll('.door-question');
	const surpriseQuestion = document.querySelectorAll('.surprise-question');
	const weddingQuestion = document.querySelectorAll('.wedding-question');
	const wandQuestion = document.querySelectorAll('.wand-question');
	const locationQuestion = document.querySelectorAll('.location-question');
	const personQuestion = document.querySelectorAll('.person-question');
	const teacherQuestion = document.querySelectorAll('.teacher-question');
	const spellQuestion = document.querySelectorAll('.spell-question');
	const disciplineQuestion = document.querySelectorAll('.discipline-question');
	/*Переменные к которым присваиваются значения при выбора вопроса*/
	let doorScore;
	let surpriseScore;
	let weddingScore;
	let wandScore;
	let locationScore;
	let personScore;
	let teacherScore;
	let spellScore;
	let disciplineScore;

	/*1*/
	for (let i = 0; i < doorQuestion.length; i++) {
		if (doorQuestion[0].checked) {
			doorScore = 3;
		} else if (doorQuestion[1].checked) {
			doorScore = 2;
		} else if (doorQuestion[2].checked) {
			doorScore = 1;
		} else if (doorQuestion[3].checked) {
			doorScore = 4;
		} else {
			return false;
		}
	} 
	/*2*/
	for (let i = 0; i < surpriseQuestion.length; i++) {
		if (surpriseQuestion[0].checked) {
			surpriseScore = 2;
		} else if (surpriseQuestion[1].checked) {
			surpriseScore = 1;
		} else if (surpriseQuestion[2].checked) {
			surpriseScore = 3;
		} else if (surpriseQuestion[3].checked) {
			surpriseScore = 4;
		} else {
			return false;
		}
	}
	/*3*/
	for (let i = 0; i < weddingQuestion.length; i++) {
		if (weddingQuestion[0].checked) {
			weddingScore = 1;
		} else if (weddingQuestion[1].checked) {
			weddingScore = 4;
		} else if (weddingQuestion[2].checked) {
			weddingScore = 3;
		} else if (weddingQuestion[3].checked) {
			weddingScore = 2;
		} else {
			return false;
		}
	}
	/*4*/
	for (let i = 0; i < wandQuestion.length; i++) {
		if (wandQuestion[0].checked) {
			wandScore = 3;
		} else if (wandQuestion[1].checked) {
			wandScore = 4;
		} else if (wandQuestion[2].checked) {
			wandScore = 2;
		} else if (wandQuestion[3].checked) {
			wandScore = 1;
		} else {
			return false;
		}
	}
	/*5*/
	for (let i = 0; i < locationQuestion.length; i++) {
		if (locationQuestion[0].checked) {
			locationScore = 2;
		} else if (locationQuestion[1].checked) {
			locationScore = 4;
		} else if (locationQuestion[2].checked) {
			locationScore = 3;
		} else if (locationQuestion[3].checked) {
			locationScore = 1;
		} else {
			return false;
		}
	}
	/*6*/
	for (let i = 0; i < personQuestion.length; i++) {
		if (personQuestion[0].checked) {
			personScore = 2;
		} else if (personQuestion[1].checked) {
			personScore = 3;
		} else if (personQuestion[2].checked) {
			personScore = 1;
		} else if (personQuestion[3].checked) {
			personScore = 4;
		} else {
			return false;
		}
	}
	/*7*/
	for (let i = 0; i < teacherQuestion.length; i++) {
		if (teacherQuestion[0].checked) {
			teacherScore = 1;
		} else if (teacherQuestion[1].checked) {
			teacherScore = 3;
		} else if (teacherQuestion[2].checked) {
			teacherScore = 4;
		} else if (teacherQuestion[3].checked) {
			teacherScore = 2;
		} else {
			return false;
		}
	}
	/*8*/
	for (let i = 0; i < spellQuestion.length; i++) {
		if (spellQuestion[0].checked) {
			spellScore = 1;
		} else if (spellQuestion[1].checked) {
			spellScore = 4;
		} else if (spellQuestion[2].checked) {
			spellScore = 3;
		} else if (spellQuestion[3].checked) {
			spellScore = 2;
		} else {
			return false;
		}
	}
	/*9*/
	for (let i = 0; i < disciplineQuestion.length; i++) {
		if (disciplineQuestion[0].checked) {
			disciplineScore = 4;
		} else if (disciplineQuestion[1].checked) {
			disciplineScore = 1;
		} else if (disciplineQuestion[2].checked) {
			disciplineScore = 3;
		} else if (disciplineQuestion[3].checked) {
			disciplineScore = 2;
		} else {
			return false;
		}
	}

	/*Названия факультетов*/
	const gryffindor = document.querySelector('.gryffindor');
	const ravenclaw = document.querySelector('.ravenclaw');
	const hufflepuff = document.querySelector('.hufflepuff');
	const slytherin = document.querySelector('.slytherin');
	/*Фото факультетов*/
	const gryffindorImage = document.querySelector('.gryffindor-image');
	const ravenclawImage = document.querySelector('.ravenclaw-image');
	const hufflepuffImage = document.querySelector('.hufflepuff-image');
	const slytherinImage = document.querySelector('.slytherin-image'); 
	/*Блок с тестом*/
	const testing = document.querySelector('.testing');

	/*Суммирование результатов переменных, к которым присваиваются значения при выбора вопроса*/
	let sumScore = doorScore + surpriseScore + weddingScore + 
	wandScore + locationScore + personScore + teacherScore + 
	spellScore + disciplineScore;

	switch (true) {
		case (sumScore <= 11):
			hufflepuff.style.display = 'block';
			testing.style.display = 'none';
			testStart.style.display = 'block';
			hufflepuffImage.style.display = 'block';
			break;
		case (sumScore > 11 && sumScore <= 17):
			ravenclaw.style.display = 'block';
			testing.style.display = 'none';
			testStart.style.display = 'block';
			ravenclawImage.style.display = 'block';
			break;
		case (sumScore > 17 && sumScore <= 25):
			gryffindor.style.display = 'block';
			testing.style.display = 'none';
			testStart.style.display = 'block';
			gryffindorImage.style.display = 'block';
			break;
		default:
			slytherin.style.display = 'block';
			testing.style.display = 'none';
			testStart.style.display = 'block';  
			slytherinImage.style.display = 'block';
			break;			
	}

	/*Вывод количества набранных баллов в консоли*/
	console.log(`1) ${doorScore}`);
	console.log(`2) ${surpriseScore}`);
	console.log(`3) ${weddingScore}`);
	console.log(`4) ${wandScore}`);
	console.log(`5) ${locationScore}`);
	console.log(`6) ${personScore}`);
	console.log(`7) ${teacherScore}`);
	console.log(`8) ${spellScore}`);
	console.log(`9) ${disciplineScore}`);

	console.log(`Общий балл: ${sumScore}`);

}

/*Кнопка прохождения тестирования заново*/
const testStart = document.querySelector('.test-start');

testStart.onclick = () => {
	location.reload();
}