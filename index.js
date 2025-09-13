let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault()
        incrementBtn.click()
    } else if (event.key === "Enter") {
        event.preventDefault()
        saveBtn.click()
    }
});
