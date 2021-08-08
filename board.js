'use strict'

/***********************************
 * 변수 선언
***********************************/

/**
 * 할 일들을 담을 배열을 선언한다.
 */
let itemList = [];

/**
 * inputButton 변수에 DOM 요소인 input_button 버튼을 찾는다.
 * 클릭시 addItem 함수가 실행된다.
 */
let inputButton = document.querySelector(".input_button");
inputButton.addEventListener("click", addItem);

/**
 * checkList 변수에 DOM 요소인 Item_list 를 찾는다. 
 */
let checkLIst = document.querySelector("item_list");

/**
 * 리스트 생성 시 문자열에 토글효과를 줄수 있다.
 */
/*

    checkList.addEventListener("click", event => {
    if (event.target.tagname === "li") {
        event.target.classList.toggle("checked");
    }
    }); 

*/

/***********************************
 * 기능 선언
***********************************/

/**
 * showlist() 실행 시 ul,li 태그 및 span 태그를 생성한다.
 */
function showlist() {
    let list = "<ul>";
    for (let i = 0; i < itemList.length; i++) {
        list += `<li>${itemList[i]}<span class="close" id=${i}>\u00D7</span></li> `
    }
    list += "</ul>";
    // 
    document.querySelector(".item_list").innerHTML = list;


    
    let deleteButtons = document.querySelectorAll(".close");
    // TODO 이게 데이터상상이 잘안감
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function addItem() {
    let item = document.querySelector(".item");
    if (item != null) {
        itemList.push(item.value);
        document.querySelector(".item").value = "";
    };
    showlist();
}

function deleteItem() {
    // 여기서의 this는 dom 요소를 가리키고 있다.
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    // filter로 하는방식으로 해보자

    showlist();
}





