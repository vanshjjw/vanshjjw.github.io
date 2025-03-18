// Projects data structure
export const projects = [
  {
    id: 'project1',
    name: 'Personal Portfolio Website',
    image: '/images/projects/q-tic-tac-toe.png',
    alternateImage: '/images/projects/portfolio-detail.jpg',
    shortDescription: 'A responsive personal portfolio website built with React and modern CSS techniques.',
    fullDescription: 'A responsive personal portfolio website built with React and modern CSS techniques. Features include dynamic content loading, smooth animations, and a clean, minimalist design.\n\nThe site is fully responsive and works on all devices. It uses React for the frontend and modern CSS techniques like CSS Grid and Flexbox for layout. The design focuses on readability and user experience.',
    link: 'https://github.com/your-username/portfolio-website',
    demo: 'https://your-portfolio-url.com',
    tags: ['React', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    id: 'project2',
    name: 'Machine Learning Image Classifier',
    image: '/images/projects/ml-classifier.jpg',
    shortDescription: 'An image classification application using TensorFlow that can identify objects in photos.',
    fullDescription: 'An image classification application using TensorFlow that can identify objects in photos. The model was trained on a custom dataset and achieves 92% accuracy on test data.\n\nThe application features a user-friendly interface for uploading images and displaying classification results. It uses TensorFlow and Keras for the backend ML processing and can classify images into over 100 different categories.',
    link: 'https://github.com/your-username/image-classifier',
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision']
  },
  {
    id: 'project3',
    name: 'Task Management Application',
    image: '/images/projects/task-app.jpg',
    alternateImage: '/images/projects/task-app-detail.jpg',
    shortDescription: 'A full-stack task management application with user authentication and task categorization.',
    fullDescription: 'A full-stack task management application with user authentication, task categorization, and progress tracking. Features include drag-and-drop task ordering, priority levels, and deadline notifications.\n\nThe application uses React for the frontend, Node.js and Express for the backend, and MongoDB for the database. Authentication is handled with JWT tokens for secure user sessions.',
    link: 'https://github.com/your-username/task-manager',
    demo: 'https://your-task-app.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication']
  }
];

// Export default for direct import
export default projects; 