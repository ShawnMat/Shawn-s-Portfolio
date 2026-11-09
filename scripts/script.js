const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
    new bootstrap.Tooltip(tooltipTriggerEl)
);

const lists = document.querySelectorAll(".lists")
const aboutContent = document.querySelectorAll(".aboutContent")
lists.forEach(listItem=>{
    listItem.addEventListener("click",()=>{
        const target = listItem.dataset.section;

        aboutContent.forEach(content =>{
            content.classList.add("d-none");
        })

        lists.forEach(item => {
            item.classList.remove("active");
            item.parentElement.classList.remove("active");
        });

        document.getElementById(target).classList.remove("d-none");

        // Highlight the selected option
        listItem.classList.add("active");
        listItem.parentElement.classList.add("active");
    })
})

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


