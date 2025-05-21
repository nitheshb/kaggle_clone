// import React from 'react';

// const EfficientGPUUsage = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6">Efficient GPU Usage Tips</h1>
      
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Understanding Kaggle GPU Limits</h2>
//         <p className="mb-4">
//           Kaggle provides free GPU access for notebooks, but with certain limitations:
//         </p>
//         <ul className="list-disc pl-6 mb-6">
//           <li className="mb-2">Weekly GPU quota of 30 hours</li>
//           <li className="mb-2">Session time limits of 9 hours for P100 GPUs</li>
//           <li className="mb-2">Session time limits of 12 hours for T4 GPUs</li>
//           <li className="mb-2">Maximum of 2 concurrent GPU sessions</li>
//         </ul>
        
//         <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
//           <p className="font-medium">Note:</p>
//           <p>GPU quotas and session limits may change. Always check the latest information in Kaggle's documentation.</p>
//         </div>
//       </div>
      
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Best Practices for GPU Usage</h2>
        
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-3">1. Optimize Data Loading</h3>
//           <p className="mb-3">
//             Slow data loading can waste precious GPU time. Use these techniques to speed up your data pipeline:
//           </p>
//           <ul className="list-disc pl-6">
//             <li className="mb-1">Use TFRecord or PyTorch DataLoader for efficient loading</li>
//             <li className="mb-1">Prefetch data to overlap computation with data loading</li>
//             <li className="mb-1">Cache frequently used datasets in memory when possible</li>
//           </ul>
//         </div>
        
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-3">2. Batch Size Optimization</h3>
//           <p className="mb-3">
//             Finding the optimal batch size can significantly improve GPU utilization:
//           </p>
//           <ul className="list-disc pl-6">
//             <li className="mb-1">Larger batch sizes generally improve GPU utilization</li>
//             <li className="mb-1">Gradually increase batch size until you hit memory limits</li>
//             <li className="mb-1">Consider mixed precision training to fit larger batches</li>
//           </ul>
//         </div>
        
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-3">3. Use Mixed Precision Training</h3>
//           <p className="mb-3">
//             Mixed precision uses both 16-bit and 32-bit floating-point types to speed up training while maintaining accuracy:
//           </p>
//           <ul className="list-disc pl-6">
//             <li className="mb-1">Can provide up to 3x speedup on modern GPUs</li>
//             <li className="mb-1">Reduces memory usage, allowing larger models or batch sizes</li>
//             <li className="mb-1">Easily implemented with PyTorch AMP or TensorFlow mixed precision</li>
//           </ul>
//         </div>
        
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-3">4. Monitor GPU Usage</h3>
//           <p className="mb-3">
//             Keep an eye on GPU utilization to identify bottlenecks:
//           </p>
//           <ul className="list-disc pl-6">
//             <li className="mb-1">Use !nvidia-smi command in notebooks to check GPU stats</li>
//             <li className="mb-1">Look for low GPU utilization which may indicate CPU bottlenecks</li>
//             <li className="mb-1">Monitor memory usage to avoid out-of-memory errors</li>
//           </ul>
//         </div>
//       </div>
      
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
        
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-3">PyTorch Mixed Precision</h3>
//           <div className="bg-gray-100 p-4 rounded-md">
//             <pre className="whitespace-pre-wrap">
// {`from torch.cuda.amp import autocast, GradScaler

// # Create gradient scaler
// scaler = GradScaler()

// # Training loop
// for epoch in range(epochs):
//     for inputs, labels in dataloader:
//         inputs, labels = inputs.to(device), labels.to(device)
        
//         # Clear gradients
//         optimizer.zero_grad()
        
//         # Forward pass with mixed precision
//         with autocast():
//             outputs = model(inputs)
//             loss = criterion(outputs, labels)
        
//         # Backward pass with gradient scaling
//         scaler.scale(loss).backward()
//         scaler.step(optimizer)
//         scaler.update()`}
//             </pre>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="text-xl font-semibold mb-3">TensorFlow Mixed Precision</h3>
//           <div className="bg-gray-100 p-4 rounded-md">
//             <pre className="whitespace-pre-wrap">
// {`import tensorflow as tf

// # Enable mixed precision
// policy = tf.keras.mixed_precision.Policy('mixed_float16')
// tf.keras.mixed_precision.set_global_policy(policy)

// # Build model
// model = tf.keras.Sequential([
//     # layers here
// ])

// # Ensure the output layer uses float32
// model.add(tf.keras.layers.Activation('linear', dtype='float32'))

// # Compile and train as usual
// model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
// model.fit(x_train, y_train, epochs=5, batch_size=64)`}
//             </pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EfficientGPUUsage;


import React, { useState } from 'react';
import CompetitionNavbarA from '../components/layout/NavbarA'; // adjust path if needed

const KaggleApiDocumentation = () => {
  const [expandedSections, setExpandedSections] = useState({
    competitions: false,
    datasets: false,
    publicApi: false,
    gpu: false,
    tpu: false,
    models: false,
    setup: false,
    organizations: false,
    groups: false,
    packages: false,
    notebooks: false
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* === Top Navigation Bar === */}
      <CompetitionNavbarA visible={true} />

      {/* Page Layout */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 pt-28 relative">
        {/* Add padding top (pt-28) to prevent overlap with fixed navbar */}

        {/* === Main Content === */}
        <main className="flex-1 pr-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">How to Use Kaggle</h1>

          <hr className="my-8 border-gray-200" />

          <section id="public-api" className="mb-8 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Efficient GPU Usage Tips</h2>
           
          </section>

          <hr className="my-8 border-gray-200" />

          <section id="installation-auth" className="mb-8 scroll-mt-24">
            <h2 className="mb-4 text-gray-700">
             Kaggle provides free access to NVIDIA TESLA P100 GPUs. These GPUs are useful for training deep learning models, though they do not accelerate most other workflows (i.e. libraries like pandas and scikit-learn do not benefit from access to GPUs).
            </h2>

            <p className="mb-4 text-gray-700">
            You can use up to a quota limit per week of GPU. The quota resets weekly and is 30 hours or sometimes higher depending on demand and resources
            </p>

            <h3 id="installation" className="text-2xl font text-gray-800 mt-6 mb-4 scroll-mt-24">
              Here are some tips and tricks to get the most of your GPU usage on Kaggle. In general, your most helpful levers will be
            </h3>

            <p className="mb-4 text-gray-700">
            Only turn on the GPU if you plan on using the GPU. GPUs are only helpful if you are using code that takes advantage of GPU-accelerated libraries (e.g. TensorFlow, PyTorch, etc).
Actively monitor and manage your GPU usage
Kaggle has tools for monitoring GPU usage in the settings menu of the Notebooks editor, at the top of the page at kaggle.com/notebooks, on your profile page, and in the session management window.
            </p>


            <p className="mb-4 text-gray-700">
             Avoid using batch sessions (the commit button) to save or checkpoint your progress. Batch sessions (commits) run all of the code from top to bottom. This is less efficient than simply downloading the .ipynb file from the Notebook editor.
Cancel unnecessary batch sessions
The same Notebook can have multiple concurrent batch sessions if you press the commit button prior to completing the first commit. If your latest code has been updated as compared to your previous code, it is likely better for you to cancel that first commit and leave only the 2nd commit running
            </p>

            <p className="mb-4 text-gray-700">
          Stop interactive sessions prior to closing the window. Interactive sessions remain active until they reach the 60 minute idle timeout limit. If you stop the session prior to closing your window it can save you up to 60 minutes of compute.
You can use the Active Events window in the lower left hand corner of your screen to manage your active sessions including stopping unused interactive sessions. Learn more about Active Events here.
Consider using the Kaggle-API to avoid interactive sessions entirely. With the Kaggle API you can push a new version of your notebook without ever opening up an interactive session in the Notebook editor.
            </p>

            
          </section>

          <hr className="my-8 border-gray-200" />
        </main>

        {/* === Right Sidebar Navigation === */}
        <aside className="w-64 hidden lg:block sticky top-24 h-fit self-start">
          <div className="border-l pl-4 text-sm text-gray-700 space-y-3">
            <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2">On this page</h4>
            <ul className="space-y-2">
              <li><a href="#public-api" className="hover:text-blue-600">Public API</a></li>
              <li><a href="#installation" className="hover:text-blue-600">Installation</a></li>
              <li><a href="#authentication" className="hover:text-blue-600">Authentication</a></li>
              <li><a href="#datasets" className="hover:text-blue-600">Datasets</a></li>
              <li><a href="#organizations" className="hover:text-blue-600">Organizations</a></li>
              <li><a href="#notebooks" className="hover:text-blue-600">Notebooks</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default KaggleApiDocumentation;
