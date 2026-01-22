function insertBoard(){
    
    //유저 인풋을 통해 입력받은 데이터를 vo(배열)로 만들기
    const title = document.querySelector("input[name=title]").value;
    const content = document.querySelector("textarea[name=content]").value;
    const createdAt = new Date();

    // 데이터 객체 변환
    const vo = {
        title,
        content,
        createdAt,
    };

    //데이터(배열 준비하기)->(기존배열 가져 올 것 , 혹시 기존배열이 없다면 새로 만들기)
    let arr = JSON.parse(localStorage.getItem("BoardVoList"));
    if (!arr) { arr = []; }
    //배열에 vo 추가할 것
    arr.push(vo);
    
    //로컬 스토리지에 데이터 채우기 + 객체 문자로 변환
    localStorage.setItem("BoardVoList", JSON.stringify(arr));

    alert("등록 완료");
}