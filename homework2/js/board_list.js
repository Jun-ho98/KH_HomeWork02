//테이블테그 내부에 데이터 채워넣기
function f01() {
    //기존 리스트 가져오기
    const BoardVoList = JSON.parse(localStorage.getItem("BoardVoList"));
    //main 테이블 tbody 가져오기 가져오기
    const tbodyTag = document.querySelector("main table tbody");
    //tr . td 체우기
    let str = '';

    //리스트가 없을 떄 대비하기
    if (!BoardVoList) {
        return;
    }

    //td 내용은 데이터로 채워넣기
    for (let i = 0; i < BoardVoList.length; ++i) {
        const vo = BoardVoList[i];
        str += `
        <tr>
            <th> <a href="./board_detail.html" onclick="setSelectedBoardNo(${i});">${i}</a> </th>
            <td>${vo.title}</td>           
            <td>비고</td>
        </tr>
        `;
    }

    tbodyTag.innerHTML = str;
}
f01();

// 유저가 상세조회하려는 게시글 번호 기록하기
function setSelectedBoardNo(no) {
    localStorage.setItem("selectedBoardNo", no);
}