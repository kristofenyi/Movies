import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../forms/TextField";

export default function CreateGenre() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>

      <Formik initialValues={{
        name:''
      }}
      onSubmit={value => {
        //when form is posted
        console.log(value);
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required')
      })}
      >
        <Form>
          <TextField displayName="Name" field="name"/>
              <br/>
              <Button type='submit'>Save changes</Button>
              <Link className="btn btn-secondary" to="/genres">Cancel</Link>
        </Form>
      </Formik>

    </>
  );
}
