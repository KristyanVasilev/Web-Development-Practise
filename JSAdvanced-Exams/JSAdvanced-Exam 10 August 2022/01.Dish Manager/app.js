window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const taskInput = document.getElementById('task');
  submitBtn = document.getElementById('form-btn').addEventListener('click', submit);
  const inProgressList = document.getElementById('in-progress');
  const finishedList = document.getElementById('finished');
  const progressCountElement = document.getElementById('progress-count');
  let progressCount = 0;
  clearBtn = document.getElementById('clear-btn').addEventListener('click', clear);

  function submit(event) {
    event.preventDefault();
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    const task = taskInput.value;

    if (firstName == '' || lastName == '' || age == ''
    || gender == '' || taskInput == '') {
      return;
    }
    function clear() {
      let finishedDishes = Array.from(finishedList.children);
      finishedDishes.forEach((post) => {
        post.remove();
      });
    }
    const element = document.createElement('li');
    element.className = 'each-line';
    element.innerHTML = `
    <article>
    <h4>${firstName} ${lastName}</h4>
    <p>${gender}, ${age}</p>
    <p>Dish description: ${task}</p>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Mark as complete</button>
    </article>`;

    editBtn = element.querySelector('.edit-btn').addEventListener('click', () => edit(element));
    completeBtn = element.querySelector('.complete-btn').addEventListener('click', () => complete(element));

    progressCount += 1;
    progressCountElement.textContent = progressCount;
    inProgressList.appendChild(element);

    resetInput();

    function edit(source) {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      genderInput.value = gender;
      taskInput.value = task;

      progressCount -= 1;
      progressCountElement.textContent = progressCount;
      source.remove();
    }

    function complete(source) {
      const completeElement = document.createElement('li');
      completeElement.className = 'each-line';
      completeElement.innerHTML = `
      <article>
      <h4>${firstName} ${lastName}</h4>
      <p>${gender}, ${age}</p>
      <p>Dish description: ${task}</p>
      </article>`;

      finishedList.appendChild(completeElement);
      progressCount -= 1;
      progressCountElement.textContent = progressCount;
      source.remove();
    }
  }

  function clear() {
    let finishedDishes = Array.from(finishedList.children);
    finishedDishes.forEach((post) => {
      post.remove();
    });
  }

  function resetInput() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
    taskInput.value = '';
  }
}