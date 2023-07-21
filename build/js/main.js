// program collapsed
const programCardBtnToggle = document.querySelectorAll('.js-program-card-btn-toggle');

programCardBtnToggle.forEach((button) => {
  button.addEventListener('click', () => {
    const programCard = button.closest('.program-card');

    if (programCard) {
      programCard.classList.toggle('is-show');
    }
  });
});


// faq collapsed
const faqCardBtnToggle = document.querySelectorAll('.js-faq-card-toggle');

faqCardBtnToggle.forEach(function(button) {
  button.addEventListener('click', function() {
    var listItem = this.closest('.faq-card');

    listItem.classList.toggle('is-show');
  });
});

// modal author
const modalAuthor = document.querySelector('.modal-author');
const modalInitLink = document.querySelector('.js-modal-author-init');
const modalCloseBtn = document.querySelector('.js-modal-author-close');

function openModal() {
  modalAuthor.classList.add('is-show');
  document.body.classList.add('is-hidden');
}

function closeModal() {
  modalAuthor.classList.remove('is-show');
  document.body.classList.remove('is-hidden');
}

modalInitLink.addEventListener('click', function(event) {
  event.preventDefault();
  openModal();
});

modalCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  closeModal();
});