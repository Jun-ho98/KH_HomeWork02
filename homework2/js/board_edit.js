//인풋테그의 value에 게시글 제목 넣기
//텍스트에리어 테그의 innerHtml에 게시글내용 넣기
function setInitalData() {
    // 인풋테그 가져오기
    const inputTag = document.querySelector("input[name=title]");
    
    //텍스트에리어 테그 가져오기
    const textarea = document.querySelector("textarea[name=content]");
    
    //상세조회한 게시글 번호 이용해서 게시글 vo 얻기
    const voList = JSON.parse(localStorage.getItem("BoardVoList"));
    const selectedBoardNo = localStorage.getItem("selectedBoardNo");
    const vo = voList[selectedBoardNo];
    
    //인폿테그의 value에 vo의 title 넣기
    inputTag.value = vo.title;
    
    //텍스트에리어의 innerHtml에 vo의 content 넣기
    textarea.innerHTML= vo.content;
    
}

setInitalData();

//현재화면의 입력값으로 , 로컬스토리지의 내용을 변경
function editBoard(){
    //현재 입력값 받아오기 (title ,content)
    const title = document.querySelector("input[name=title]").value;
    const content = document.querySelector("textarea[name=content]").value;
    //기존 voList가져오기
    const voList = JSON.parse(localStorage.getItem("BoardVoList"));
    //현재 상세조회중인 게시글 번호 준비하기
    const no = localStorage.getItem("selectedBoardNo");
    //voList에서 특정인덱스의 vo꺼내온 뒤 수정
    const vo = voList[no];
    vo.title = title;
    vo.content = content;
    //로컬스토리지에서 set하기(voList)
    localStorage.setItem("BoardVoList",JSON.stringify(voList));

    alert("수정완료!");
    location.href = "./board_detail.html";
}