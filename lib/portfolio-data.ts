export const impactStats = [
  { label: "Publications", value: "7", detail: "Conference papers and book chapter" },
  { label: "Reviewer Roles", value: "3", detail: "IEEE Access, PLOS ONE, IGI Global" },
  { label: "Academic CGPA", value: "3.86", detail: "BSc in CSE, AIUB" },
  { label: "Applied Projects", value: "6", detail: "Vision, forecasting, transport, systems" },
];

export const focusAreas = [
  "Computer Vision",
  "NLP and LLMs",
  "Deep Learning",
  "Healthcare AI",
  "Forecasting",
  "Cybersecurity",
];

export const publications = [
  {
    title:
      "Industry 5.0-Driven Deep Learning Framework for Long-Term Global CO2 Emission Forecasting",
    venue: "ECCT 2026",
    publisher: "ACSR (Springer Nature)",
    year: "2026",
    type: "Conference",
    tags: ["Deep Learning", "Forecasting", "Sustainability"],
  },
  {
    title: "Few-Shot Multimodal Instruction Tuning for Vision-Language Models",
    venue: "ECCT 2026",
    publisher: "Taylor & Francis",
    year: "2026",
    type: "Conference",
    tags: ["Multimodal AI", "LLMs", "Vision-Language"],
  },
  {
    title:
      "Biomedical LLM Hallucination Detection via Classifier-Conditioned Factuality Classification",
    venue: "ECCT 2026",
    publisher: "Taylor & Francis",
    year: "2026",
    type: "Conference",
    tags: ["Healthcare AI", "LLMs", "Trustworthy AI"],
  },
  {
    title:
      "End-to-End Deep Learning Framework for Kidney MRI Segmentation and Explainable CKD Detection Using Transfer Learning",
    venue: "ECCT 2026",
    publisher: "ACSR (Springer Nature)",
    year: "2026",
    type: "Conference",
    tags: ["Medical Imaging", "Transfer Learning", "Explainable AI"],
  },
  {
    title:
      "A Hybrid Deep Learning Framework for Real-Time Traffic Risk Prediction",
    venue: "IEEE QPAIN 2026",
    publisher: "Chittagong, Bangladesh",
    year: "2026",
    type: "Conference",
    tags: ["Deep Learning", "Traffic AI", "Risk Prediction"],
  },
  {
    title:
      "Domain-Specific NLP for Personalized Radiation Treatment Pathways with LLM Fine-Tuning",
    venue: "IEEE WIECON-ECE 2025",
    publisher: "Cox's Bazar, Bangladesh",
    year: "2025",
    type: "Conference",
    tags: ["Healthcare AI", "NLP", "LLMs"],
  },
  {
    title: "Securing the Future: Enhancing Cybersecurity in Supply Chains",
    venue: "Book Chapter",
    publisher: "IGI Global",
    year: "2025",
    type: "Book Chapter",
    tags: ["Cybersecurity", "Supply Chain", "Applied AI"],
  },
];

export const projects = [
  {
    title: "VirtualMouse-AI",
    slug: "virtual-mouse",
    img: "/projects/virtual-mouse/ss1.webp",
    domain: "Computer Vision",
    summary: "Gesture-controlled mouse interaction using OpenCV and MediaPipe.",
    pipeline: ["Webcam", "Landmarks", "Gesture Logic", "Cursor Control"],
  },
  {
    title: "Real-Time Color Detection",
    slug: "color-detection",
    img: "/projects/color-detection/ss1.webp",
    domain: "Real-Time Vision",
    summary: "Live color and gesture detection for interactive vision workflows.",
    pipeline: ["Camera Feed", "Preprocessing", "Detection", "Visual Output"],
  },
  {
    title: "Sales Forecasting",
    slug: "sales-forecasting",
    img: "/projects/sales-forecasting/ss1.webp",
    domain: "Forecasting",
    summary: "Time-series forecasting workflow for business demand planning.",
    pipeline: ["Historical Data", "Cleaning", "Forecast Model", "Trend Insight"],
  },
  {
    title: "Stock Prediction",
    slug: "stock-prediction",
    img: "/projects/stock-prediction/ss1.webp",
    domain: "Predictive Modeling",
    summary: "Market movement prediction using sequential data and ML features.",
    pipeline: ["Price Data", "Features", "Model", "Prediction"],
  },
  {
    title: "DhakaConnect",
    slug: "dhaka-connect",
    img: "/projects/dhaka-connect/ss1.webp",
    domain: "Transport Systems",
    summary: "Route-finding system for bus navigation across Dhaka.",
    pipeline: ["Stops", "Routes", "Search", "Best Path"],
  },
  {
    title: "Car Rental System",
    slug: "car-rental",
    img: "/projects/car-rental/ss1.webp",
    domain: "Database Systems",
    summary: "Rental management system for bookings, users, and vehicle records.",
    pipeline: ["Customers", "Vehicles", "Bookings", "Reports"],
  },
];

export const reviewers = [
  {
    name: "IEEE Access",
    role: "Journal Reviewer",
    detail:
      "Assessed novelty, technical rigor, experimental validation, and reproducibility of AI-driven research.",
    href: "https://drive.google.com/drive/folders/16DryrTHQdm_0CUdq2gAPynleDBPF6XUF?usp=drive_link",
  },
  {
    name: "PLOS ONE",
    role: "Journal Reviewer",
    detail:
      "Reviewed interdisciplinary computational research connecting machine learning methods with real-world applications.",
    href: "https://drive.google.com/drive/folders/1BpxekP8Clpt-GF_u3GVDfhFnCbXdIkub?usp=drive_link",
  },
  {
    name: "IGI Global",
    role: "Book Chapter Reviewer",
    detail:
      "Evaluated scholarly chapters in emerging technologies, cybersecurity, and applied artificial intelligence systems.",
  },
];
