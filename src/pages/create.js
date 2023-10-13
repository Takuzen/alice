import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Create() {
  const { userId } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePost = async () => {
    if (file) {
      // Upload to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `users/${userId}/cubes/${Date.now()}`);
      await uploadBytes(storageRef, file);
  
      // Get download URL
      const url = await getDownloadURL(storageRef);
  
      // Redirect to the success page with gltfUrl
      router.push(`/success?gltfUrl=${encodeURIComponent(url)}&userId=${userId}`);
    } else {
      console.error('All fields are required');
    }
  };  

  const isGenerateDisabled = !file;

  return (
    <main className="w-[100vw] flex flex-col items-center p-24 font-serif">
      <div className="flex flex-col gap-20">
      <h1 className='self-center font-serif text-xl'>Upload your GLB stuffs</h1>
      <div className='self-center focus:outline-none'>
        <input 
          type="file" 
          accept=".glb" 
          onChange={handleFileChange}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <button 
          onClick={handlePost} 
          className={isGenerateDisabled ? 'opacity-50 cursor-not-allowed text-xl' : 'bg-[#f5bf34] text-white px-6 py-3 rounded-lg hover:opacity-70'}
          disabled={isGenerateDisabled}
        >
          Upload <span>&#8594;</span>
        </button>
      </div>
      </div>
    </main>
  );
}
