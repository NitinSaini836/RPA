import React,{useEffect,useState} from "react";


function BlogList() {
    const [departments, setDepartments] = useState();
  
    useEffect(() => {
         fetch ('http://localhost:1337/api/departments')
         .then(response => response.json())
         .then(data => {
             console.log(data);
            setDepartments(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return (
        <>
     {console.log(departments)};

      </>
    );
  }
  export default BlogList;