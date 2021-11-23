const bubble = new BubbleSort();
const bubblesort_parent = document.getElementById("bubblesort");
bubble.setParent(bubblesort_parent);
bubble.initiate();
function startbubblesort(){
    bubble.sort();
}
const bubble_button = document.getElementById("startbubble");
bubble_button.addEventListener("click", startbubblesort);