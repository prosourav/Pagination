import React, { useState } from "react";
import { useEffect } from "react";
import Pagination1 from "../Pagination1.js/Pagination1";
// import Paginate from "../Paginate/Paginate";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showPerpage,setShowPerpage] = useState(4)
  const [pagination,setPagination] = useState({
    start:0,
    end:showPerpage,
  })
 
 
const onPaginationChange=(start,end)=>{
  setPagination({start:start,end:end});
}

  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json.slice(0, 30)));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.slice(pagination.start,pagination.end).map((user) => (
          <div className="col-md-3 p-3" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5>#{user.id} {user.title}</h5>
                <p>{user.body}</p>
              </div>
            </div>
          </div>
        ))}
        <Pagination1 showPerpage={showPerpage} onPaginationChange={onPaginationChange} total={users.length}/>
      </div>
    </div>
  );
};

export default Home;
