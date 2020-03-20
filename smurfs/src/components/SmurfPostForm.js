import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SmurfPostForm = props => {
const {errors, touched} = props
    return (
        <div>
            <h3>Create Smurf</h3>
            <Form>
                <div>
                    <Field type="text" name="name" placeholder="Enter smurf name..."/>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <Field type="text" name="height" placeholder="Enter smurf height"/>
                    {touched.height && errors.height && <p className="error">{errors.height}</p>}
                </div>
                <div>
                    <Field type="number" name="age" placeholder="Enter smurf age"/>
                    {touched.age && errors.age && <p className="error">{errors.age}</p>}
                </div>

                <button type="submit">Submit</button>
            </Form>

        </div>
    )

}

const FormikSmurfPostForm = withFormik({

    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Error'),
        age: Yup.number('Error')
            .required('Error'),
        height: Yup.string()
            .required('Error')
    }),

    handleSubmit( values, props ) {
        console.log(values)
        props.props.createSmurf(values)
    }

})(SmurfPostForm);

export default FormikSmurfPostForm