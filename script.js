function submitRating() {
    const movieId = document.getElementById('movie-id').value.trim();
    const movieTitle = document.getElementById('movie-title').value.trim();
    const movieRating = document.getElementById('movie-rating').value.trim();
    const movieReview = document.getElementById('movie-review').value.trim();

    if (movieId === '' || movieTitle === '' || movieRating === '' || movieReview === '') {
        alert('Please fill in all fields.');
        return;
    }

    const ratingData = {
        movieId: movieId,
        movieTitle: movieTitle,
        rating: movieRating,
        review: movieReview
    };

    fetch('http://localhost:3000/submitRating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ratingData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit rating.');
        }
        return response.json();
    })
    .then(data => {
        alert('Rating submitted successfully!');
        console.log('Server response:', data);
    })
    .catch(error => {
        console.error('Error submitting rating:', error);
        alert('Failed to submit rating. Please try again later.');
    });
}