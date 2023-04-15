import axios from "axios";
  
const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`
    },
  }

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
    return await axios.get("http://localhost:8080/ideas", config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getOneIdea = async (id) => {
    return await axios.get(`http://localhost:8080/ideas/${id}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const updateViewTime = async (id) => {
    return await axios.put(`http://localhost:8080/ideas/updateViewTime/${id}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const deleteOneIdea = async (id) => {
    return await axios.delete(`http://localhost:8080/ideas/${id}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

export const createIdea = async (formData) => {
    return await axios.post("http://localhost:8080/ideas", config, formData, 
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
    return await axios.get("http://localhost:8080/ideas/getMostPopularIdeas", config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getMostViewIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas/getMostViewIdeas", config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getLastIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas/getLastIdeas", config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getTags = async () => {
    return await axios.get("http://localhost:8080/tags", config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getOneTag = async (id) => {
    return await axios.get(`http://localhost:8080/tags/${id}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getIdeasByUserId = async (id) => {
    return await axios.get(`http://localhost:8080/ideas/profile/${id}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getCommentsOfIdea = async (id) => {
    return await axios.get(`http://localhost:8080/comments/${id}`, config)
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
    return await axios.delete(`http://localhost:8080/comments/${cmtId}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }


  export const getNotificationsOfUser = async (userId) => {
    return await axios.get(`http://localhost:8080/notifications/${userId}`, config)
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
  
  export const getOneUser = async (userId) => {
    return await axios.get(`http://localhost:8080/users/${userId}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }
  
  export const getUserInfoById = async (userId) => {
    return await axios.get(`http://localhost:8080/users/${userId}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const postNotification = async (userId, otherUserId, ideaId, type) => {
    return await axios.post(`http://localhost:8080/notifications/${ideaId}`, {
     
            userId: userId,
            otherUserId: otherUserId,
            type: type,
        
    })
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

 export const getUsers = async () => {
    return await axios.get("http://localhost:8080/users", config)
      .then(res => {
      
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getUsersByDepartment = async (department) => {
    return await axios.get(`http://localhost:8080/users/users/${department}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getTotalUsersOfDepartment = async (department) => {
    return await axios.get(`http://localhost:8080/users/getalluser/${department}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getTotalIdeasOfDepartment = async (department) => {
    return await axios.get(`http://localhost:8080/users/idea/${department}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getTotalIdeasTodayOfDepartment = async (department) => {
    return await axios.get(`http://localhost:8080/users/totaluser/${department}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }

  export const getIdeasByTagId = async (tagId) => {
    return await axios.get(`http://localhost:8080/ideas/ideasByTag/${tagId}`, config)
      .then(res => {
          return res;
      })
      .catch(err => {
          console.log(err)
      })
  }