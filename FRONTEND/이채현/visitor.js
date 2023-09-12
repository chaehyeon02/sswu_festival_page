// $(document).ready(function(){
// 	// 읽은 알림 총 갯수
// 	var oldListCnt = '${oldListCnt}';
// 	// 조회 인덱스
// 	var startIndex = 1;	// 인덱스 초기값
// 	var searchStep = 5;	// 5개씩 로딩
	
// 	// 페이지 로딩 시 첫 실행
// 	readOldNotify(startIndex);
	
// 	// 더보기 클릭시
// 	$('#more').click(function(){
// 		startIndex += searchStep;
// 		readOldNotify(startIndex);
//     });
		
// 	// 더보기 실행함수 **
//     function readOldNotify(index){
// 		let _endIndex = index+searchStep-1;	// endIndex설정
// 		$.ajax({
// 			type: "post",
// 			async: "true",
// 			dataType: "json",
// 			data: {
// 				m_id: '${m_id}',
// 				startIndex: index,
// 				endIndex: _endIndex
// 			},
// 			url: "${contextPath}/member/searchMoreNotify.do",
// 			success: function (data, textStatus) {
// 				let NodeList = "";
// 				for(i = 0; i < data.length; i++){let newNode = "<div style='display: none;' class='card form-group col-sm-10 mx-auto p-0' onClick=\"window.open('" + data[i].n_url + "')\">";
// 					newNode += "<div class='card-body pt-3'><div class='row px-3 mb-2'>";
// 					newNode += "<strong class='d-block text-gray-dark'>"+data[i].n_type+"</strong>";
// 					newNode += "<span class='text-muted ml-auto'>"+data[i].n_time+"</span>";
// 					newNode += "</div><span>"+data[i].n_content+"</span></div></div>";
// 					NodeList += newNode;
// 				}
// 				$(NodeList).appendTo($("#oldList")).slideDown();

// 				// 더보기 버튼 삭제
// 				if(startIndex + searchStep > oldListCnt){
// 					$('#searchMoreNotify').remove();
// 				}				
// 			}
// 		});
// 	}
// });





const data_text = ['글1', '글2', '글3', '글4'];
const data_person = ['사람1', '사람2', '사람3', '사람4'];
const data_date = [1, 2, 3, 4]

window.onscroll = function () { 
    //스크롤이 바닥에 닿았을때
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showScrollItems(); // 컨텐츠를 추가하는 함수를 불러온다.
		console.log("스크롤 끝");
    }
}

async function showScrollItems() {
    if (pageUrl != null) {
        const items = await scrollItemApiView(pageUrl)
        // const itemsInfo = items['items']['results']
        // pageUrl = items['items']['next']
		pageUrl = data_text;
		const itemsInfo = [data_text, data_person, data_date]
        itemDataAppend(itemsInfo)
    }
}