
const keywords = [
  {
    title: "distress tolerance",
    description: "Expanding your tolerance for distress allows you to develop the capacity to respond rather than react to stressors. This builds resilience and emotional strength."
  },
  {
    title: "emotional identification",
    description: "Before you can regulate your emotions, you must be able to identify them. This foundational skill enables understanding and growth in emotional awareness."
  },
  {
    title: "emotional expression",
    description: "Expressing yourself in healthy and constructive ways is vital to creating sustainable change in relationships and personal growth."
  },
  {
    title: "self-awareness",
    description: "Understanding our thoughts, feelings, and behaviors helps us recognize patterns and make conscious choices in our responses to life's challenges."
  },
  {
    title: "stress management",
    description: "Learning to effectively manage stress through various techniques helps maintain emotional balance and mental well-being."
  },
  {
    title: "cognitive restructuring",
    description: "Identifying and changing unhelpful thought patterns leads to improved emotional regulation and better mental health outcomes."
  }
];

// Keep track of placed clouds' rectangles
const placedClouds = [];

// Cloud dimensions (approximate)
const CLOUD_WIDTH = 400;
const CLOUD_HEIGHT = 200;
const CONTAINER_WIDTH = 1200;
const CONTAINER_HEIGHT = 800;
const PADDING = 20;

function isOverlapping(newPos) {
  const newRect = {
    left: parseFloat(newPos.left) / 100 * CONTAINER_WIDTH,
    top: parseFloat(newPos.top) / 100 * CONTAINER_HEIGHT,
    right: (parseFloat(newPos.left) / 100 * CONTAINER_WIDTH) + CLOUD_WIDTH,
    bottom: (parseFloat(newPos.top) / 100 * CONTAINER_HEIGHT) + CLOUD_HEIGHT
  };

  // Fixed the logic: return true if ANY rectangle overlaps
  return placedClouds.some(rect => !(
    newRect.left > rect.right + PADDING ||    // newRect is to the right
    newRect.right + PADDING < rect.left ||    // newRect is to the left
    newRect.top > rect.bottom + PADDING ||    // newRect is below
    newRect.bottom + PADDING < rect.top       // newRect is above
  ));
}

function generateRandomPosition() {
  let attempts = 0;
  let position;
  
  do {
    position = {
      left: `${Math.random() * (CONTAINER_WIDTH - CLOUD_WIDTH) / CONTAINER_WIDTH * 100}%`,
      top: `${Math.random() * (CONTAINER_HEIGHT - CLOUD_HEIGHT) / CONTAINER_HEIGHT * 100}%`
    };
    attempts++;
  } while (isOverlapping(position) && attempts < 100);

  // Add the new position to placed clouds
  const rect = {
    left: parseFloat(position.left) / 100 * CONTAINER_WIDTH,
    top: parseFloat(position.top) / 100 * CONTAINER_HEIGHT,
    right: (parseFloat(position.left) / 100 * CONTAINER_WIDTH) + CLOUD_WIDTH,
    bottom: (parseFloat(position.top) / 100 * CONTAINER_HEIGHT) + CLOUD_HEIGHT
  };
  placedClouds.push(rect);

  return position;
}

function createKeywordCloud(keyword, position) {
  const cloudElement = document.createElement('div');
  cloudElement.className = 'keyword-cloud animate-fade-in';
  cloudElement.style.left = position.left;
  cloudElement.style.top = position.top;
  
  cloudElement.innerHTML = `
    <h3>${keyword.title}</h3>
    <p>${keyword.description}</p>
  `;
  
  return cloudElement;
}

function initializeKeywordClouds() {
  const container = document.getElementById('cloudContainer');
  placedClouds.length = 0; // Reset placed clouds
  
  keywords.forEach(keyword => {
    const position = generateRandomPosition();
    const cloud = createKeywordCloud(keyword, position);
    container.appendChild(cloud);
  });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeKeywordClouds);
