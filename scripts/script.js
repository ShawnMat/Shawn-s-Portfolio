const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
    new bootstrap.Tooltip(tooltipTriggerEl)
);

const lists = document.querySelectorAll(".lists");
const aboutContent = document.querySelectorAll(".aboutContent");

lists.forEach(listItem => {
    listItem.addEventListener("click", () => {
        const target = listItem.dataset.section;

        aboutContent.forEach(content => {
            content.classList.add("d-none");
        });

        lists.forEach(item => {
            item.classList.remove("active");
            item.parentElement.classList.remove("active");
        });

        document.getElementById(target).classList.remove("d-none");

        listItem.classList.add("active");
        listItem.parentElement.classList.add("active");
    });
});

// Projects
const projectLists = document.querySelectorAll(".projectLists")
const projectImg = document.querySelectorAll(".projectImg")
projectLists.forEach(listItem=>{
    listItem.addEventListener("mouseenter",()=>{
        const target = listItem.dataset.section;

        projectImg.forEach(content =>{
            content.classList.add("d-none");
        })

        projectLists.forEach(item => {
            item.classList.remove("active");
            item.parentElement.classList.remove("active");
        });

        document.getElementById(target).classList.remove("d-none");

        // Highlight the selected option
        listItem.classList.add("active");
        listItem.parentElement.classList.add("active");

  
    })

})


const resumeBtn = document.querySelector("#resumeBtn")
resumeBtn.addEventListener("click",()=>{
    window.open("documents/Shawn Mathew Daniel Resume.pdf","_blank" )
})
const sayHiBtn = document.querySelector("#sayHiBtn");

sayHiBtn.addEventListener("click", () => {
    window.location.href = "mailto:your-email@example.com";
});


const sonicKeysWebsite = document.querySelector("#sonicKeysWebsite");
const foodOnWheelsWebsite = document.querySelector("#foodOnWheelsWebsite");
const hospitalAppointmentSystemWebsite = document.querySelector("#hospitalAppointmentSystemWebsite")
const geeksForGeeksWebsite = document.querySelector("#geeksForGeeksWebsite")
const vedaantaWebsite = document.querySelector("#vedaantaWebsite");
const hmtWatchesWebsite = document.querySelector("#hmtWatchesWebsite")
const homeServicesWebsite = document.querySelector("#homeServicesWebsite")

sonicKeysWebsite.addEventListener("click", () => {
    window.open("https://sonic-keys.vercel.app/","_blank" )
});
foodOnWheelsWebsite.addEventListener("click", () => {
    window.open("https://foodonwheels-five.vercel.app/","_blank" )
});
// hospitalAppointmentSystemWebsite.addEventListener("click", () => {
//     window.open("https://sonic-keys.vercel.app/","_blank" )
// });
geeksForGeeksWebsite.addEventListener("click", () => {
    window.open("https://geeksforgeeks-omega.vercel.app/","_blank" )
});
vedaantaWebsite.addEventListener("click", () => {
    window.open("https://vedaanta-senior-living.vercel.app/","_blank" )
});
hmtWatchesWebsite.addEventListener("click", () => {
    window.open("https://hmtwatches-bootstrap.vercel.app/","_blank" )
});
homeServicesWebsite.addEventListener("click", () => {
    window.open("https://homeservices-orcin.vercel.app/","_blank" )
});
