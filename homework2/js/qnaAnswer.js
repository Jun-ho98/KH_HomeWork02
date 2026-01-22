function getQnaList() {
    let list = JSON.parse(localStorage.getItem("qnaList"));
    if (!list) list = [];
    return list;
}

function saveQnaList(list) {
    localStorage.setItem("qnaList", JSON.stringify(list));
}

function getSelectedQna() {
    return localStorage.getItem("selectedQna");
}

function loadAnswerPage() {
    const no = getSelectedQna();
    if (no === null) return;

    const list = getQnaList();
    const vo = list[no];

    document.querySelector("#answerNo").innerHTML = no;
    document.querySelector("#answerTitle").innerHTML = vo.title;
    document.querySelector("#answerContent").innerHTML = vo.content;

    if (vo.answer) {
        document.querySelector("#answerText").value = vo.answer;
    }
}

function saveAnswer() {
    const no = getSelectedQna();
    const list = getQnaList();
    const vo = list[no];

    const answer = document.querySelector("#answerText").value;

    vo.answer = answer;
    vo.answered = true;

    saveQnaList(list);

    alert("답변이 저장되었습니다!");
    location.href = "qnaList.html";
}

window.onload = function () {
    loadAnswerPage();
};
