




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
    let yearValue = year.value
    let monthValue = month.value -1
    let dayValue = day.value
    const birthDate = new Date(yearValue, monthValue , dayValue)
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

    } else if ((dayValue < 1 || dayValue > 31) || (monthValue < 0 || monthValue > 12) || birthDate > today) {
        for (let index = 0; index < p.length; index++) {
            p[index].innerText = `Must be a valid ${obj[index].id}`
            p[index].classList.add("invalidP")
        }
        
        
    } else if(birthDate.getDate() !== parseInt(dayValue) || birthDate.getMonth() !== parseInt(monthValue) || birthDate.getFullYear() !== parseInt(yearValue) ){
        p[0].innerText = "Must be a valid date"
        p[0].classList.add("invalidP")
        day.classList.add("invalid")
        console.log(birthDate.getDate(), parseInt(dayValue), birthDate.getMonth(), parseInt(monthValue), birthDate.getFullYear(), parseInt(yearValue));
    }
    

    else {

        yearValue = today.getFullYear() - birthDate.getFullYear();
        monthValue = today.getMonth() - birthDate.getMonth();
        dayValue = today.getDate() - birthDate.getDate();

        if (dayValue < 0) {
            monthValue--;
            dayValue += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
            console.log('me ejecuto' )
        }
        
        if (monthValue < 0) {
            yearValue--;
            monthValue += 12;
        }
        for (let index = 0; index < p.length; index++) {
            p[index].classList.remove("invalidP")
            
        }
        spanYear.innerText = yearValue
        spanMonth.innerText = monthValue
        spanDay.innerText = dayValue 
        
    }

}    

form.addEventListener("submit", ejecutar)