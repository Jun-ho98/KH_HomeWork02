// =======================
// 공통
// =======================
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

// =======================
// 상세보기 불러오기
// =======================
function loadDetail() {
    const no = getSelectedQna();
    if (no === null) return;

    const list = getQnaList();
    const vo = list[no];

    document.querySelector("#detailNo").innerHTML = no;
    document.querySelector("#detailTitle").innerHTML = vo.title;
    document.querySelector("#detailContent").innerHTML = vo.content;
}

window.onload = function () {
    loadDetail();
};

// =======================
// 삭제 기능
// =======================
function deleteQna() {
    const result = confirm("정말 삭제하시겠습니까?");
    if (!result) return;

    const no = getSelectedQna();
    const list = getQnaList();

    list.splice(no, 1); // 해당 질문 삭제

    saveQnaList(list);

    alert("삭제가 완료되었습니다.");
    location.href = "qnaList.html";
}

// =======================
// 관리자 답변 페이지 이동
// =======================
function goAnswerPage() {
    location.href = "qnaAnswer.html";
}
