"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import { Twitter, Facebook, Linkedin, Link as LinkIcon, ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const params = useParams();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Mock blog data - in a real app, this would come from an API or database
  const blogPosts = {
    1: {
      title: "Building Real-Time Audio Processing with Python",
      publishDate: "February 15, 2025",
      readTime: "12 min read",
      tags: ["Python", "Machine Learning", "Audio Processing", "TensorFlow"],
      content: `
        In the realm of machine learning and signal processing, real-time audio classification presents unique challenges and opportunities. Through my work on the GunShot Detection System at DRDO, I've gained valuable insights into building robust acoustic monitoring systems that can accurately classify audio signals in real-time environments.
      `,
      sections: [
        {
          title: "Audio Data Preprocessing",
          content: "Effective audio preprocessing is crucial for achieving high accuracy in classification tasks. We need to convert raw audio signals into meaningful features that machine learning models can understand. Here's how we handle audio preprocessing:",
          code: "import librosa\nimport numpy as np\n\ndef preprocess_audio(audio_file, sr=44100):\n    # Load audio file\n    audio, _ = librosa.load(audio_file, sr=sr)\n    \n    # Extract MFCC features\n    mfcc = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=13)\n    \n    # Normalize features\n    mfcc = (mfcc - np.mean(mfcc)) / np.std(mfcc)\n    \n    return mfcc"
        },
        {
          title: "YAMNet Integration",
          content: "YAMNet is a pretrained deep learning model that provides a solid foundation for audio classification. Integrating it with custom CNN models creates a powerful dual-model architecture:",
          code: "import tensorflow_hub as hub\nimport tensorflow as tf\n\n# Load YAMNet model\nyamnet_model = hub.load('https://tfhub.dev/google/yamnet/1')\n\ndef extract_yamnet_features(audio_samples):\n    # Get embeddings from YAMNet\n    _, embeddings, _ = yamnet_model(audio_samples)\n    return embeddings"
        },
        {
          title: "Real-Time Processing Pipeline",
          content: "Building a real-time processing pipeline requires careful consideration of latency and computational efficiency. We use multi-threading to ensure smooth audio processing:",
          code: "import threading\nimport queue\nfrom collections import deque\n\nclass RealTimeAudioProcessor:\n    def __init__(self, model, buffer_size=1024):\n        self.model = model\n        self.audio_buffer = deque(maxlen=buffer_size)\n        self.result_queue = queue.Queue()\n        \n    def process_audio_stream(self, audio_stream):\n        for chunk in audio_stream:\n            self.audio_buffer.append(chunk)\n            if len(self.audio_buffer) == self.audio_buffer.maxlen:\n                threading.Thread(\n                    target=self._classify_chunk,\n                    args=(list(self.audio_buffer),)\n                ).start()"
        },
        {
          title: "Web Interface Integration",
          content: "Using WebSocket technology, we can stream real-time predictions to a web interface, providing immediate feedback to users:",
          code: "# WebSocket server for real-time communication\nimport asyncio\nimport websockets\nimport json\n\nasync def handle_prediction(websocket, path):\n    async for message in websocket:\n        audio_data = json.loads(message)\n        prediction = model.predict(audio_data)\n        \n        await websocket.send(json.dumps({\n            'prediction': prediction,\n            'confidence': float(prediction_confidence),\n            'timestamp': time.time()\n        }))"
        }
      ],
      conclusion: "Building real-time audio processing systems requires a deep understanding of both machine learning techniques and system architecture. The combination of proven models like YAMNet with custom CNNs, coupled with efficient real-time processing pipelines, can achieve remarkable accuracy in challenging acoustic environments. Through this work, we've demonstrated that achieving 90%+ accuracy in gunshot detection is possible with the right approach to feature extraction, model architecture, and real-time processing."
    },
    2: {
      title: "Machine Learning for Medical Image Analysis",
      publishDate: "January 20, 2025",
      readTime: "10 min read",
      tags: ["PyTorch", "Computer Vision", "Medical AI", "CNN"],
      content: "Medical image analysis using deep learning has revolutionized diagnostic capabilities, enabling healthcare professionals to detect conditions with unprecedented accuracy.",
      sections: [
        {
          title: "Data Augmentation for Medical Images",
          content: "Medical datasets often suffer from limited sample sizes. Data augmentation helps create robust models that generalize well.",
          code: "import torch\nimport torchvision.transforms as transforms\n\ntransform = transforms.Compose([\n    transforms.RandomRotation(10),\n    transforms.RandomHorizontalFlip(),\n    transforms.ColorJitter(brightness=0.2),\n    transforms.Normalize(mean=[0.485, 0.456, 0.406],\n                       std=[0.229, 0.224, 0.225])\n])"
        }
      ],
      conclusion: "Achieving 98%+ accuracy in brain tumor detection demonstrates the power of well-designed CNN architectures combined with proper data preprocessing and augmentation strategies."
    }
  };

  const blog = blogPosts[Number(params.id) as keyof typeof blogPosts] || blogPosts[1];

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-gray-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Back navigation */}
            <div className="flex flex-wrap gap-2 p-4">
              <Link 
                href="/blogs" 
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-[#101418] hover:text-[#0c77f2]'} text-base font-medium leading-normal flex items-center gap-2 transition-colors`}
              >
                <ArrowLeft size={16} />
                Back to TechWrites
              </Link>
            </div>

            {/* Article header */}
            <h1 className={`${isDark ? 'text-white' : 'text-[#101418]'} tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5`}>
              {blog.title}
            </h1>
            
            <p className={`${isDark ? 'text-gray-400' : 'text-[#5c728a]'} text-sm font-normal leading-normal pb-3 pt-1 px-4`}>
              Published on {blog.publishDate} · {blog.readTime} · Tags: {blog.tags.join(", ")}
            </p>

            {/* Article content */}
            <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              {blog.content}
            </p>

            {/* Sections */}
            {blog.sections.map((section, index) => (
              <div key={index}>
                <h3 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4`}>
                  {section.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
                  {section.content}
                </p>
                {section.code && (
                  <div className={`mx-4 mb-3 p-4 rounded-lg ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                    <pre className={`${isDark ? 'text-green-400' : 'text-green-700'} text-sm font-mono whitespace-pre-wrap`}>
                      {section.code}
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <h3 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4`}>
              Conclusion
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              {blog.conclusion}
            </p>
          </div>
        </div>

        {/* Social sharing footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="grid grid-cols-4 gap-2 px-4">
              <div className={`flex flex-col items-center gap-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-2.5 text-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity`}>
                <div className={`rounded-full ${isDark ? 'bg-gray-700' : 'bg-[#eaedf1]'} p-2.5`}>
                  <Twitter className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-5 h-5`} />
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-sm font-medium leading-normal`}>
                  Share on Twitter
                </p>
              </div>
              <div className={`flex flex-col items-center gap-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-2.5 text-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity`}>
                <div className={`rounded-full ${isDark ? 'bg-gray-700' : 'bg-[#eaedf1]'} p-2.5`}>
                  <Facebook className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-5 h-5`} />
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-sm font-medium leading-normal`}>
                  Share on Facebook
                </p>
              </div>
              <div className={`flex flex-col items-center gap-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-2.5 text-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity`}>
                <div className={`rounded-full ${isDark ? 'bg-gray-700' : 'bg-[#eaedf1]'} p-2.5`}>
                  <Linkedin className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-5 h-5`} />
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-sm font-medium leading-normal`}>
                  Share on LinkedIn
                </p>
              </div>
              <div className={`flex flex-col items-center gap-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-2.5 text-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity`}>
                <div className={`rounded-full ${isDark ? 'bg-gray-700' : 'bg-[#eaedf1]'} p-2.5`}>
                  <LinkIcon className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-5 h-5`} />
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-sm font-medium leading-normal`}>
                  Copy Link
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 