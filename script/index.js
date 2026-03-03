const loadLeason = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data));
}

const displayLesson = (lessons)=>{
          // 1 get the container and empty  
    const lessoncontainer = document.getElementById("lesson-container")
          lessoncontainer.innerHTML = "";
    // 2 get every lesson
    for(let lesson of lessons){
        // 3 create element

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
         <button class="btn btn-outline btn-primary mt-3">
         <i class="fa-solid fa-book-open"></i> Learn - ${lesson.level_no}
         </button>
        `
        lessoncontainer.append(btnDiv);
    }
    

}
loadLeason();