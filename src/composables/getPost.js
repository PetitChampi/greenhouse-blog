import { ref } from 'vue'
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore"

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const postId = doc(db, 'posts', id)
      const docSnap = await getDoc(postId)

      if (!docSnap.exists()) {
        throw Error("This post doesn't exist")
      }

      post.value = { ...docSnap.data(), id: docSnap.id }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}

export default getPost