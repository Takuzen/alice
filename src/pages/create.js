import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Create() {
  const { userId } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [cubeCaption, setCubeCaption] = useState("");
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePost = async () => {
    if (cubeCaption && file) {
      // Upload to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `users/${userId}/cubes/${cubeCaption}`);
      await uploadBytes(storageRef, file);

      // Get download URL
      const url = await getDownloadURL(storageRef);

      // Add to Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'allcubes'), {
        userId,
        cubeCaption,
        gltfUrl: url,
        createdAt: serverTimestamp(),
      });
      console.log('Cube successfully posted!');

      router.push('/success');
    } else {
      console.error('All fields are required');
    }
  };

  const isGenerateDisabled = !cubeCaption || !file;

  return (
    <main className="w-[100vw] flex flex-col items-center p-24 font-serif">
      <div className="flex flex-col gap-20">
      <h1 className='self-center font-serif text-xl'>Upload your GLB/GLTF Cube</h1>
      <div className='self-center focus:outline-none'>
        <input 
          type="file" 
          accept=".glb, .gltf" 
          onChange={handleFileChange}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className='self-start'>
        <input 
          type="text" 
          placeholder="* Cube Caption" 
          value={cubeCaption} 
          onChange={(e) => setCubeCaption(e.target.value)} 
          className='focus:outline-none caret-[#f5bf34]' 
        />
      </div>
      <div className="flex flex-col gap-4">
        <button 
          onClick={handlePost} 
          className={isGenerateDisabled ? 'opacity-50 cursor-not-allowed text-xl' : 'bg-[#f5bf34] text-white px-6 py-3 rounded-lg hover:opacity-70'}
          disabled={isGenerateDisabled}
        >
          Review Post <span>&#8594;</span>
        </button>
      </div>
      </div>
    </main>
  );
}
