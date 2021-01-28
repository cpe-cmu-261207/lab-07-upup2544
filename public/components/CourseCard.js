const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <div className="bg-green-700 rounded-3xl p-2">
  <td className='w-full' >
    <p className = "bg-green-100 rounded-3xl p-1 text-center hover:bg-green-200">{props.name}</p>
    <p className = "bg-green-100 rounded-3xl p-1 text-center hover:bg-green-200">{props.grd}</p>
    <p className = "bg-green-100 rounded-3xl p-1 text-center hover:bg-green-200">{props.crd}</p>
  </td>
  <td>
    <button className = "bg-red-500 rounded-3xl p-1  hover:bg-red-200" onClick = {() =>props.del(props.name)} > x </button>
  </td>
  </div>;
};

export default CourseCard;