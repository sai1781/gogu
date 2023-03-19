const Jewelery = ({data}) => {
  return (
    <>
       <ul>
        {data?.map((e,idx)=>{
          return(
            <>
             <li>
              {e.title}
            </li>
            <li>
              {e.price}
            </li>
            <li>
              {e.description}
            </li>
            </>
           
          )
        })}
       </ul>
    </>
  );
};

export default Jewelery;
