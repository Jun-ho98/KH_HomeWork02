function f01(){
    const divArr = document.querySelectorAll("main > div");

    const BoardVoList = JSON.parse(localStorage.getItem("BoardVoList"));
    const no = localStorage.getItem("selectedBoardNo");
    const vo = BoardVoList[no];

    const { title, content, createdAt } = vo;

    console.log(title)
    divArr[0].innerHTML = title;
    divArr[1].innerHTML = content;
    divArr[2].innerHTML = createdAt;
}
f01();

//게시글삭제 (로컬스토리지에서 vo 제거)
function deleteBoard() {
    //진짜 삭제할건지 물어보기
    const result = confirm("삭제하시겠습니까");
    if(!result){return;}
    
    //제거할 "vo 번호" 얻기
    const no = localStorage.getItem("selectedBoardNo");
    
    //로컬스토리지에서 "voList"얻기
    const voList = JSON.parse(localStorage.getItem("BoardVoList"));
    
    //voList 에서 특정 인덱스의 요소 제거
     voList.splice(no, 1);
     
     //정리된 voList를 다시 로컬스토리지에 넣기
     localStorage.setItem("BoardVoList" , JSON.stringify(voList));
    
     //삭제완료 알림 띄우기
     alert("삭제가 완료 되었습니다");
    
     //목록조회 페이지로 이동
     location.href = "/practice/Kh/board_list.html";
    
}

