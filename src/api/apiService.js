import axios from "axios";

export const getIdeas = async () => {
    return await axios.get("http://localhost:8080/ideas")
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
  