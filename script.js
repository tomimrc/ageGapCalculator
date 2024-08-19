




const button = document.getElementById("button")
const form = document.getElementById("form")
const spanYear = document.getElementById("spanYear")
const spanMonth = document.getElementById("spanMonth")
const spanDay = document.getElementById("spanDay")
const label = document.querySelectorAll("label")
const p = document.querySelectorAll("p")

const child = form.children





const ejecutar = (e) => {
    e.preventDefault()
    const year = document.getElementById("year")
    const month = document.getElementById("month")
    const day = document.getElementById("day")
    const yearValue = year.value
    const monthValue = month.value
    const dayValue = day.value
    const birthDate = new Date(yearValue, monthValue - 1, dayValue)
    const today = new Date()

    const obj = [day,month,year]
    obj.forEach(input => input.classList.remove("invalid"));
    p.forEach(input => input.classList.remove("invalidP"));

    if (!yearValue || !monthValue || !dayValue) {
        
        for (let index = 0; index < p.length; index++) {
            if(!obj[index].value){obj[index].classList.add("invalid")
                p[index].classList.add("invalidP")
            }
        }

    } else if ((dayValue < 1 || dayValue > 31) || (monthValue < 1 || monthValue > 12) || birthDate > today) {
        for (let index = 0; index < p.length; index++) {
            p[index].innerText = `Must be a valid ${obj[index].id}`
            p[index].classList.add("invalidP")
        }
        
    } else if(birthDate.getDate() !== parseInt(dayValue) || birthDate.getMonth() !== parseInt(monthValue-1) || birthDate.getFullYear() !== parseInt(yearValue) ){
        p[0].innerText = "Must be a valid date"
        p[0].classList.add("invalidP")
        day.classList.add("invalid")
    }
    

    else {
        for (let index = 0; index < p.length; index++) {
            p[index].classList.remove("invalidP")
            
        }
        spanYear.innerText = today.getFullYear() - birthDate.getFullYear()
        spanMonth.innerText = today.getMonth() - birthDate.getMonth()
        spanDay.innerText = today.getDate() - birthDate.getDate()

    }

}    

form.addEventListener("submit", ejecutar)