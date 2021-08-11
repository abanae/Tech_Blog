const commentFormHandler = async (event) => {
    event.preventDefault();
console.log(event.target);
    const content = document.querySelector('#content').value.trim();
    const postId = document.querySelector('#postId').textContent

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({content, postId}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
          document.location.reload();
        } else {
            alert('Failed to leave comment');
        }
    }
};

const deleteHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  const updateHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      document.location.href = `/api/comments/${id}`
    }
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update comment');
      }
    }


document.querySelector('#submit').addEventListener('click', commentFormHandler);
document.querySelector('.commentBtn').addEventListener('click', deleteHandler);
document.querySelector('.updateBtn').addEventListener('click', updateHandler);