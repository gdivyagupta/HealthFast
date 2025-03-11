// Smooth scrolling for "Explore Features" button
document.querySelector('.cta-button[href="#features"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#features').scrollIntoView({
    behavior: 'smooth'
  });
});

// Optional: Add animations for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// Optional: Add animations or interactivity to the steps
const steps = document.querySelectorAll('.step');

steps.forEach(step => {
  step.addEventListener('mouseover', () => {
    step.style.transform = 'scale(1.05)';
    step.style.transition = 'transform 0.3s ease';
  });
  step.addEventListener('mouseout', () => {
    step.style.transform = 'scale(1)';
  });
});
