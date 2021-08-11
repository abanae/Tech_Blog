const newFormHandler = async (event) => {
    event.preventDefault();
  
    // QuerySelectors
    const title = document.querySelector('#post-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const post_text = document.querySelector('#post-desc').value.trim();
  
    // Create Posts 
    if (title && post_text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  // Delete Posts
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete posts');
      }
    }
  };
  
  // Bttms Query Selectors
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#post-list')
    .addEventListener('click', delButtonHandler);