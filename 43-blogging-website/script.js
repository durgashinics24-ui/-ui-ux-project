// Simple client-side demo: expand 'Continue reading' to show more
document.addEventListener('click', function(e){
  if(e.target.matches('.post a')){
    e.preventDefault();
    const p = e.target.closest('.post');
    const extra = document.createElement('p');
    extra.textContent = 'Expanded content: This is additional demo text for the blog post.';
    p.appendChild(extra);
    e.target.remove();
  }
});