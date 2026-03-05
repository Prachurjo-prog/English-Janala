const loadLeason = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const loadLesson = (id) => {
  console.log(id);
  const URL = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(URL)
    .then((res) => res.json())
    .then((json) => displayLessonWords(json.data));
};

const loadWordDetails = async(id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
    fetch(url)
    const res = await fetch(url);
    const json = await res.json();
    displayWordDetails(json.data);
};

const displayWordDetails = (word) => {
    console.log(word)
    const detailsBox = document.getElementById("details-container");

    detailsBox.innerHTML = `
    <div>
                        <h1 class="text-xl font-bold pb-3">${word.word} (<i class="fa-solid fa-microphone-lines"></i>
                            :${word.pronunciation})</h1>
                        <p class="text-lg font-semibold pb-1">Meaning</p>
                    </div>
                    <div>
                        <p class="bangla text-lg font-medium">${word.meaning}</p>
                        <p class="py-2 text-xl font-semibold">Example</p>
                        <p class="text-lg">${word.sentence}</p>
                    </div>
                    <div>
                        <p class="bangla text-lg font-medium pt-4">সমার্থক শব্দ গুলো</p>
                        <div class="flex gap-2">
                            <p class="bg-sky-100 p-1 rounded-sm font-medium">${word.synonyms[0]}</p>
                            <p class="bg-sky-100 p-1 rounded-sm font-medium">${word.synonyms[1]}</p>
                            <p class="bg-sky-100 p-1 rounded-sm font-medium">${word.synonyms[2]}</p>
                        </div>
                    </div>
                    <div class="modal-action">
                        <form method="dialog">

                            <button class="btn btn-primary btn-outline">Complete Learning</button>
                        </form>
                    </div>
    `
    document.getElementById("my_modal_1").showModal();
}

const displayLessonWords = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length === 0) {
    wordContainer.innerHTML = `
        <div class="bg-gray-100 mt-3 p-4 rounded-lg text-center col-span-full">
       <img class="mx-auto pb-8" src="./images/alert-error.png" alt="alert"/>
        <p class="bangla md:text-lg mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-3xl font-semibold">নেক্সট Lesson এ যান</h1>
        </div>
        `;
    return;
  }

  for (let word of words) {
    const wordDiv = document.createElement("div");

    wordDiv.innerHTML = `
        <div class="bg-white p-5 rounded-lg text-center justify-center items-center">
                <h1 class="text-2xl font-bold mb-2">${word.word}</h1>
                 <p class=" font-medium mb-3">${"meaning"} / ${"pronunciation"}</p>
                <p class="text-2xl font-medium bangla">"${word.meaning} / ${word.pronunciation}"</p>
                
                <div class="flex justify-between">
                    <button onclick="loadWordDetails(${word.id})" class="btn bg-sky-50 hover:bg-sky-100 hover:cursor-pointer p-2 rounded-sm"><i class="fa-regular fa-circle-question "></i></button>
                    <a class="btn bg-sky-50 hover:bg-sky-100 hover:cursor-pointer p-2 rounded-sm"><i class="fa-solid fa-volume-high"></i></a>
                </div>
            </div>
        `;
    wordContainer.append(wordDiv);
  }
};

const displayLesson = (lessons) => {
  // 1 get the container and empty
  const lessoncontainer = document.getElementById("lesson-container");
  lessoncontainer.innerHTML = "";
  // 2 get every lesson
  for (let lesson of lessons) {
    // 3 create element

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
         <button onclick = "loadLesson(${lesson.level_no})" class="btn btn-outline btn-primary mt-3">
         <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
         </button>
        `;
    lessoncontainer.append(btnDiv);
  }
};

loadLeason();
