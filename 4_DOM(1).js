// Document Object Model ( DOM )
// JS로 웹페이지를 제어하기 위한 Object Model 

// 1. 제어 대상 찾기
// 1-1. document.getElementsByTagName
var myList = document.getElementsByTagName('li'); // 'li' Tag의 원소들을 myList에
console.log(myList.length)
for (var i = 0; i < myList.length; i++) myList[i].style.color = 'red';

var ol = document.getElementsByTagName('ol')[0]; // 'ol' Tag중 첫번째의 원소들을 ol에
for (var i = 0; i < ol.getElementsByTagName('li').length; i++)
    ol.getElementsByTagName('li')[i].style.color = 'blue'; // 해당 ol의 li에 blue


// 1-2. document.getElementsByClassName
var classList = document.getElementsByClassName('active') // 'active' class 원소들을 classList에
for (var i = 0; i < classList.length; i++) classList[i].style.color = 'pink';

// 1-3. document.getElementById : 항상 하나의 결과만 갖는다
document.getElementById('HELLO WORLD').style.color = 'green';

// 1-4. document.querySelector : css 선택자를 이용하여 객체 조회
var li = document.querySelector('li');
li.style.color = 'black';
// 하나만 return

var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) lis[i].style.color = 'orange';
// 'li' 를 지닌 모든 객체 return
// getElementsByTagName('li') == querySelectorAll('li')


// 2. jQuery
jQuery(document).ready(function ($) {
    $('body').prepend('<h4>This is jQuery</h4>');
});
$('body').prepend('<h6>Hello world</h6>');
$('body').append('<li> hello </li>');


// 3. jQuery 제어 대상 찾기
$('li').css('color', 'powderBlue');


// 4. HTMLElement (모든 elemnet의 상속)
// HTMLInputElement, HTMLLIElement, HTMLCollection ...  : 태그명을 따라간다.
var li = document.getElementById('HELLO WORLD');
console.log(li.constructor.name); // HTMLLIELEMENT (1개 : 원소)

var lis = document.getElementsByTagName('li');
console.log(lis.constructor.name); // HTMLCollection (여러개 : 배열)

lis[0].parentNode.removeChild(lis[0]); // 첫째 삭제
// == lis[0].parentElement.removeChild(lis[0]);


// 5. jQuery 객체
var myLI = $('li');
// myLI[i] : DOM 객체
for (var i = 0; i < myLI.length / 2; i++) {
    $(myLI[i]).css('color', 'black');
}
myLI.map(function (index, element) {
    console.log(index, element);
})
