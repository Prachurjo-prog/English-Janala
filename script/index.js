const loadLeason = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data));
}

const loadLesson = (id) =>{
    console.log(id)
    const URL = `https://openapi.programming-hero.com/api/level/${id}`;
    
    fetch(URL)
    .then(res =>res.json())
    .then(json => displayLessonWords(json.data))
}

const displayLessonWords = (words)=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length === 0){
        wordContainer.innerHTML =`
        <div class="bg-gray-100 mt-3 p-4 rounded-lg text-center col-span-full">
       <img class="mx-auto pb-8" src="./images/alert-error.png" alt="alert"/>
        <p class="bangla md:text-lg mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-3xl font-semibold">নেক্সট Lesson এ যান</h1>
        </div>
        `
        return;
    }

    for(let word of words){
        const wordDiv = document.createElement("div");

        wordDiv.innerHTML = `
        <div class="bg-white p-5 rounded-lg text-center justify-center items-center">
                <h1 class="text-2xl font-bold mb-2">${word.word}</h1>
                 <p class=" font-medium mb-3">${"meaning"} / ${"pronunciation"}</p>
                <p class="text-2xl font-medium bangla">"${word.meaning} / ${word.pronunciation}"</p>
                
                <div class="flex justify-between">
                    <button class="btn bg-sky-50 hover:bg-sky-100 hover:cursor-pointer p-2 rounded-sm"><i class="fa-regular fa-circle-question "></i></button>
                    <a class="btn bg-sky-50 hover:bg-sky-100 hover:cursor-pointer p-2 rounded-sm"><i class="fa-solid fa-volume-high"></i></a>
                </div>
            </div>
        `
        wordContainer.append(wordDiv);
    }

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
         <button onclick = "loadLesson(${lesson.level_no})" class="btn btn-outline btn-primary mt-3">
         <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
         </button>
        `
        lessoncontainer.append(btnDiv);
    }
};




loadLeason();
