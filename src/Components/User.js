import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setValue } from '../slice'
import { useSelector } from 'react-redux'

const User = () => {
  const[data,setData] = useState([]);
  const value = useSelector(state => state.value)
  const dispatch = useDispatch();
  const[sort,setSort]= useState();
  const[show,setShow] = useState(false);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, []);


  function setStatus(e){
    console.log(e.target.value);
    const value1 = e.target.value;
    dispatch(setValue(value1));
    if(value1 !== 1){
      setShow(true);
      setSort(value1);
    }
  } 
  return (
    <div>User Page
      <form method="post" action="/">
      <input name='type' type="radio" value="1" onChange={(e)=>{setStatus(e)}} checked />
      <label for="all">ALL</label>
      <input name='type' type="radio" value="2" onChange={(e)=>{setStatus(e)}}/>
      <label for="all">Male</label>
      <input  name='type' type="radio" value="3" onChange={(e)=>{setStatus(e)}} />
      <label for="all">Female</label>
      </form>
      <table>
        <thead>
          <th>Image</th>
          <th>name</th>
          <th>email</th>
          <th>gender</th>
        </thead>
        <tbody>
          <tr>
            <td>sasa</td>
            <td>sasa</td>
            <td>sasa</td>
            <td>sasa</td>
          </tr>
        {show=== false ? (data?.map((e,idx)=>{
              return (
                <tr key={idx}>
                  <td><img  src={e.picture.thumbnail} /></td>
                  <td>{e.name.first}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                </tr>
              )
           
        }))
        :(<>
           {data?.filter(e => e.gender === 'male').map((e,idx) => {
            console.log(e);
               return (
                <tr key={idx}>
                  <td><img  src={e.picture.thumbnail} /></td>
                  <td>{e.name.first}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                </tr>
               )
            
           })}
        </>)}
         
        </tbody>
      </table> 

    </div>
  )
}

export default User