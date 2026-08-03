    function StudentCard(props) {
      return (
        <div style={{border: "1px solid #ccc", padding: "15px", borderRadius: "8px"}}>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Age:</b> {props.age}</p>
          <p><b>Class:</b> {props.className}</p>
          <p><b>City:</b> {props.city}</p>
        </div>
      );
    }
    export default StudentCard;