window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');
  const previewList = document.getElementById('preview-list');

  const publishBtn = document.getElementById('form-btn').addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const storyTitle = storyTitleInput.value;
    const genre = genreInput.value;
    const story = storyInput.value;

    if (firstName == '' || lastName == '' || age == ''
      || storyTitle == '' || genre == '' || story == '') {
      return;
    }

    const element = document.createElement('li');
    element.className = 'story-info';
    element.innerHTML = `
    <article>
    <h4>Name: ${firstName} ${lastName}</h4>
    <p>Age: ${age}</p>
    <p>Title: ${storyTitle}</p>
    <p>Genre: ${genre}</p>
    <p>${story}</p>
    </article>
    <button class="save-btn">Save Story</button>
    <button class="edit-btn">Edit Story</button>
    <button class="delete-btn">Delete Story</button>
    `;

    saveBtn = element.querySelector('.save-btn').addEventListener('click', save);
    editBtn = element.querySelector('.edit-btn').addEventListener('click', () => edit(element));
    deleteBtn = element.querySelector('.delete-btn').addEventListener('click', () => onDelete(element));

    previewList.appendChild(element);
    resetInput();
    publishBtn = document.getElementById('form-btn').disabled = true;

    function save() {
      allDivsWithIdMain = document.getElementById('main');
      allDivsWithIdMain.remove();
      const saveElement = document.createElement('h1');
      saveElement.textContent = 'Your scary story is saved!';
      const div = document.createElement('div');
      div.setAttribute('id', 'main');
      div.appendChild(saveElement);
      let bodyElement = document.querySelector(".body").appendChild(div);
    }

    function edit(source) {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreInput.value = genre;
      storyInput.value = story;

      source.remove();
      publishBtn = document.getElementById('form-btn').disabled = false;
    }

    function onDelete(source) {
      source.remove();
      publishBtn = document.getElementById('form-btn').disabled = false;
    }
  }

  function resetInput() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    storyInput.value = '';
  }
}
