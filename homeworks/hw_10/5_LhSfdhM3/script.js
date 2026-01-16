// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

if (document.querySelector(".index-page")) {
    window.addEventListener("load", () => {
        let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
        sessions.push({timePoint: Date.now()});
        localStorage.setItem("sessions", JSON.stringify(sessions));
        //console.log(sessions);
    });
}

if (document.querySelector(".sessions-page")) {
    const sessionsBox = document.getElementById("sessionsList");
    let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
     for (let session of sessions) {
         const sessionTime = new Date(session.timePoint);
         const visitTime = document.createElement("p");
         visitTime.innerText = `Date: ${sessionTime.toLocaleDateString()}, time: ${sessionTime.toLocaleTimeString()}`;
         sessionsBox.appendChild(visitTime);
     }
}


