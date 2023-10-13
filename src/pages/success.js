import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function Success() {
  const router = useRouter();
  const { userId, cubeCaption, gltfUrl } = router.query; // Assuming you will pass these as query params
  const [caption, setCaption] = useState("");
  const [isPostDisabled, setPostDisabled] = useState(true);

  useEffect(() => {
    if (caption) {
      setPostDisabled(false);
    } else {
      setPostDisabled(true);
    }
  }, [caption]);

  const handlePost = async () => {
    const db = getFirestore();
    let username = ''; // Initialize as an empty string
    
    // Fetch username from Firestore based on userId
    const userDocRef = doc(db, `users/${userId}`);
    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        username = userDoc.data().username;
      } else {
        console.error('No such user document!');
        return;
      }
    } catch (error) {
      console.error('Error fetching user document:', error);
      return;
    }
  
    const newCubeData = {
      userId,
      username,
      caption,
      gltfUrl,
      createdAt: serverTimestamp(),
    };
  
    try {
      // Add to the 'allcubes' collection
      await addDoc(collection(db, 'allcubes'), newCubeData);
      console.log('Cube successfully posted to allcubes collection!');
  
      // Also add to the user's own 'cubes' collection
      const userCubesCollection = collection(db, `users/${userId}/cubes`);
      await addDoc(userCubesCollection, {
        ...newCubeData,
        id: Date.now(),
      });
      console.log(`Cube also added to users/${userId}/cubes collection`);
  
      router.push('/');
    } catch (error) {
      console.error('Error posting cube:', error);
    }
  };
  
  return (
    <div className="flex flex-col items-center h-screen pt-20 w-1/3 mx-auto">
      <div>
        <h1 className="text-4xl text-center font-black text-green-500 mb-4 underline underline-offset-8">
            Congratulations!
        </h1>
        <p className='font-serif font-bold mb-10'>Your 3D model is successfully loaded.</p>
        <div className='font-serif self-center mb-20'>
          {gltfUrl && (
            <model-viewer
              src={gltfUrl}
              style={{ height: '300px' }}
              alt="A 3D model of a cube"
              auto-rotate
              camera-controls
              exposure="0.75"
            ></model-viewer>
          )}
        </div>
        <div className="font-serif text-lg mb-4">
          <input 
            type="text" 
            placeholder="* Add a caption" 
            value={caption} 
            onChange={(e) => setCaption(e.target.value)}
            className='focus:outline-none caret-[#f5bf34]' 
          />
        </div>
        <div className='font-serif flex flex-col'>
          <button 
            onClick={handlePost} 
            className={isPostDisabled ? 'opacity-50 cursor-not-allowed text-xl line-through' : ' font-black bg-[#f5bf34] text-white px-20 py-3 rounded-lg hover:opacity-70'}
            disabled={isPostDisabled}
          >
            Post
          </button>
          <Link href="/">
            <p className='text-center mt-7 hover:opacity-70'><span>&#8592;</span> Back to home</p>                      
          </Link>
        </div>
      </div>
    </div>
  );  
}