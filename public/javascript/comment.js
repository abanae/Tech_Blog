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
            alert('Failed to leave comments.');
        }
    }
};

document.querySelector('#submit').addEventListener('click', commentFormHandler);