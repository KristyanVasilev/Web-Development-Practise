window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const contentInput = document.getElementById('post-content');

  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  publishBtn = document.getElementById('publish-btn').addEventListener('click', publish);
  clearBtn = document.getElementById('clear-btn').addEventListener('click', clear);

  function publish(event) {
    event.preventDefault();
    const title = titleInput.value;
    const category = categoryInput.value;
    const content = contentInput.value;

    if (title == '' || category == '' || content == '') {
      return;
    }

    const element = document.createElement('li');
    element.className = 'rpost';
    element.innerHTML = `
    <article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button> 
    <button class="action-btn approve">Approve</button>`;

    [editBtn, sellBtn] = element.querySelectorAll('.action-btn');
    editBtn.addEventListener('click', () => edit(element));
    sellBtn.addEventListener('click', () => approve(element));

    reviewList.appendChild(element);
    resetInput();

    function edit(source) {
      titleInput.value = title;
      categoryInput.value = category;
      contentInput.value = content;

      source.remove();
    }

    function approve(source) {
      const approveElement = document.createElement('li');
      approveElement.className = 'rpost';
      approveElement.innerHTML = `
      <article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
      </article>`;

      publishedList.appendChild(approveElement);

      source.remove();
    }
  }

  function clear() {
    let publishedPosts = Array.from(publishedList.children);
    publishedPosts.forEach((post) => {
      post.remove();
    });
  }

  function resetInput() {
    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';
  }
}
