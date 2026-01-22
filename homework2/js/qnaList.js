// ========================
// 공통 함수
// ========================
function getQnaList() {
    let list = JSON.parse(localStorage.getItem("qnaList"));
    if (!list) list = [];
    return list;
}
function setSelectedQna(no) {
    localStorage.setItem("selectedQna", no);
}


function displayQnaList() {
    const tbody = document.querySelector("#qnaTbody");

    const list = getQnaList();
    let str = "";

    for (let i = 0; i < list.length; i++) {
        const vo = list[i];
        str += `
        <tr onclick="openDetail(${i})">
            <td>${i}</td>
            <td>${vo.title}</td>
            <td>${vo.answered ? "답변완료" : "대기중"}</td>
        </tr>
        `;
    }

    tbody.innerHTML = str;
}

function openDetail(no) {
    setSelectedQna(no);
    location.href = "./qnaDetail.html  ";
}

window.onload = function () {
    displayQnaList();
};
