
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

function generateRandomPosition() {
  return {
    left: `${Math.random() * 60}%`,
    top: `${Math.random() * 60 + 20}%`
  };
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
  
  keywords.forEach(keyword => {
    const position = generateRandomPosition();
    const cloud = createKeywordCloud(keyword, position);
    container.appendChild(cloud);
  });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeKeywordClouds);
