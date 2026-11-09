const  daily = document.querySelector(".daily");
const  weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const currentTime = document.querySelectorAll(".timeParagraph");
const previousTime = document.querySelectorAll(".updatedParagraph")

daily.addEventListener("click", async (event)=>{
    const response = await fetch("data.json");
    if (!response) {
        throw new Error("the data did not fetched");     
    }
    const users = await response.json();
    users.forEach( (user, index) => {
       currentTime[index].textContent = `${user.timeframes.daily.current}hrs`;
       previousTime[index].textContent = `Yestarday - ${user.timeframes.daily.previous}hrs`;
    });
});
weekly.addEventListener("click", async (event)=>{
    const response = await fetch("data.json");
    if (!response) {
        throw new Error("the data did not fetched");     
    }
    const users = await response.json();
    users.forEach( (user, index) => {
       currentTime[index].textContent = `${user.timeframes.weekly.current}hrs`;
       previousTime[index].textContent = `Last week - ${user.timeframes.weekly.previous}hrs`;
    });
});
monthly.addEventListener("click", async (event)=>{
    const response = await fetch("data.json");
    if (!response) {
        throw new Error("the data did not fetched");     
    }
    const users = await response.json();
    users.forEach( (user, index) => {
       currentTime[index].textContent = `${user.timeframes.monthly.current}hrs`;
       previousTime[index].textContent = `Last month - ${user.timeframes.monthly.previous}hrs`;
    });
});