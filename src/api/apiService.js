import axios from "axios";

export const login = async (email, password) => {
    try {
        console.log("email: "+ email + " password: "+ password)
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      return response.data; // return token
    } catch (error) {
      console.log(error);
      throw new Error("Login failed");
    }
  };
  
export const getIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas")
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getOneIdea = async (id) => {
    return await axios.get(`http://localhost:8080/ideas/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const updateViewTime = async (id) => {
    return await axios.put(`http://localhost:8080/ideas/updateViewTime/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const deleteOneIdea = async (id) => {
    return await axios.delete(`http://localhost:8080/ideas/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

export const createIdea = async (formData) => {
    return await axios.post("http://localhost:8080/ideas", formData, 
        {headers: {
        'Content-Type': 'multipart/form-data',
      },})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const editIdea = async (id, formData) => {
    return await axios.put(`http://localhost:8080/ideas/${id}`, formData, 
        {headers: {
        'Content-Type': 'multipart/form-data',
      },})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getMostPopularIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas/getMostPopularIdeas")
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getMostViewIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas/getMostViewIdeas")
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getLastIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas/getLastIdeas")
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getTags = async () => {
    return await axios.get("http://localhost:8080/tags")
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getOneTag = async (id) => {
    return await axios.get(`http://localhost:8080/tags/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getIdeasByUserId = async (id) => {
    return await axios.get(`http://localhost:8080/ideas/profile/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getCommentsOfIdea = async (id) => {
    return await axios.get(`http://localhost:8080/comments/${id}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }


  export const createCommentOfIdea = async (ideaId, formCommentData) => {
    return await axios.post(`http://localhost:8080/comments/${ideaId}`, formCommentData, 
        {headers: {
        'Content-Type': 'multipart/form-data',
      },})
        .then(res => {
           
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}


export const deleteOneComment = async (cmtId) => {
    return await axios.delete(`http://localhost:8080/comments/${cmtId}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }


  export const getNotificationsOfUser = async (userId) => {
    return await axios.get(`http://localhost:8080/notifications/${userId}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getEmotionByUserIdIdeaId = async (ideaId, userId) => {
    return await axios.get(`http://localhost:8080/emotion/${ideaId}`, {
        params: {
            userId: userId // Truyền userId vào query parameter
        }
    })
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const postEmotionOfIdeaIdByUserId = async (ideaId, userId, isEmotion) => {
    return await axios.post(`http://localhost:8080/emotion/${ideaId}`, {userId: userId, isEmotion: isEmotion})
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const deleteEmotion = async (ideaId, userId) => {
    return await axios.delete(`http://localhost:8080/emotion/${ideaId}`, {
        params: {
            userId: userId // Truyền userId vào query parameter
        }
    })
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const downloadFile = async (fileId) => {
    return await axios.get(`http://localhost:8080/ideas/files/download/${fileId}`)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }
  
  