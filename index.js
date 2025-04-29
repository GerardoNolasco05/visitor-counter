let saveVisitors = document.getElementById("save-visitors")
let countVisitors = document.getElementById("count-visitors")
let count = 0

function increment(){
    count += 1
    countVisitors.textContent = count
}

function save(){
    let countStr = count + " / "
    saveVisitors.textContent += countStr
    countVisitors.textContent = 0
    count = 0
}

document.getElementById("save-btn").addEventListener("click", save)
document.getElementById("increment-btn").addEventListener("click", increment)