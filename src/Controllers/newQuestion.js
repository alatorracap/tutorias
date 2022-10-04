require("dotenv").config();
import { newQuestion } from "./hooks/api";

//& Crea pregunta
function newQuestion() {
    handleCreateQuestion =()=>{
        setMetodo("POST")
        setUrl('http://localhost:3001/questions/'+id)

    return(

    )
}
  let connection;

  //* formatea la fecha para la bd
  const creationDate = format(new Date(), "yyyy-MM-dd HH:mm:ss");

  //* Conexion al DB
  connection = await connectDB();

  //* recogemos question, title y technology y el id desde el token Y LAS TECNOLOGIAS PERMITIDAS DEL ENV
  const { question, title, technology } = req.body;
  const { id } = req.userToken;
  const { TECHNOLOGIES } = process.env;

  //~ Consulta SQL
  const result = await connection.query(
    `
    INSERT INTO questions (questiondate, title, question, user_id, technology) 
    VALUES (?,?,?,?,?) 
		`,
    [creationDate, title, question, id, technology]
  );
};

export default newQuestion;
