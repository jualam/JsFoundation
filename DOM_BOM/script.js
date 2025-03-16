//example 1
document.getElementById('changeTextButton').addEventListener("click",function(){
    let paragraph=document.getElementById("myParagraph");
    paragraph.textContent="The paragraph is changed"
})

//example 2
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let citiesList=document.getElementById("citiesList");
    (citiesList.firstElementChild.nextElementSibling.nextElementSibling.classList.add("highlight"))
})

//Example 3
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType=document.getElementById('coffeeType');
    coffeeType.textContent="Espresso"
    coffeeType.style.backgroundColor='blue';
    coffeeType.style.color='white'
    coffeeType.style.padding='5px'
})

//Example 4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem=document.createElement('li')
    newItem.textContent="Eggs"
    document.getElementById('shoppingList').appendChild(newItem)
})

//Example 5
document.getElementById('removeLastTask').addEventListener('click',function(){
    let taskList=document.getElementById("taskList");
    if (taskList.lastElementChild) { // Ensure there's a child to remove
        taskList.lastElementChild.remove(); // Use remove() correctly with ()
    }
})

//Example 6
document.getElementById('clickMeButton').addEventListener('dblclick',function(){
    alert("Olalalala Mangoooo!!!")
})

//example 7
document.getElementById("teaList").addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert('You selected: '+event.target.textContent)
    }
})

//Example 8
document.getElementById('feedbackForm').addEventListener('submit',function(event){
    event.preventDefault();
    let feedback=document.getElementById('feedbackInput').value
    document.getElementById('feedbackDisplay').textContent=`Feedback is : ${feedback}`
    a=document.getElementById('feedbackDisplay');
    a.style.color='red';
    a.style.backgroundColor='yellow'
})

//Example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent="DOM fully Loaded"
})

//Example 10
document.getElementById('toggleHighlight').addEventListener('click',function(){
    let descriptionText=document.getElementById('descriptionText');
    descriptionText.classList.toggle('highlight')
})