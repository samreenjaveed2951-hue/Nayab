function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "8px",
      width: "200px",
      backgroundColor: "#f9f9f9"
    }}>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Class:</b> {props.className}</p>
      <p><b>City:</b> {props.city}</p>
    </div>
  );
}

export default StudentCard;