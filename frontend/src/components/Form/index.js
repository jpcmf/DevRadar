import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validations = Yup.object().shape({
  github_username: Yup.string().required(),
  techs: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
});

const Form = ({ handleSubmit, initialValues }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm>
        <strong>Cadastrar</strong>
        <div className="form-group">
          <label htmlFor="username">Github Username</label>
          <Field type="text" name="github_username" id="github_username" />
          <ErrorMessage component="span" name="github_username" />
        </div>
        <div className="form-group">
          <label htmlFor="techs">Technologies</label>
          <Field type="text" name="techs" id="techs" />
          <ErrorMessage component="span" name="techs" />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude</label>
          <Field type="number" name="latitude" id="latitude" />
          <ErrorMessage component="span" name="latitude" />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude</label>
          <Field type="number" name="longitude" id="longitude" />
          <ErrorMessage component="span" name="longitude" />
        </div>
        <button type="submit">Salvar</button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
