function getQnaList() {
    let list = JSON.parse(localStorage.getItem("qnaList"));
    if (!list) list = [];
    return list;
}

function saveQnaList(list) {
    localStorage.setItem("qnaList", JSON.stringify(list));
}


function insertQna() {
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;

    if (!title || !content) {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    const vo = {
        title,
        content,
        answer: "",
        answered: false,
        createdAt: new Date()
    };

    const list = getQnaList();
    list.push(vo);

    saveQnaList(list);

    alert("질문이 등록되었습니다!");
    location.href = "qnaList.html";
}
