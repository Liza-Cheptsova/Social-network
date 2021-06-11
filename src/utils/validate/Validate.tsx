import s from "./valid.module.css";

export const FormValidation = ({ input, meta, child, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? s.error : ""}>
      {props.children}
      {hasError && <p>{meta.error}</p>}
    </div>
  );
};

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormValidation {...props}>
      <input {...input} {...restProps} />
    </FormValidation>
  );
};

export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormValidation {...props}>
      <textarea {...input} {...restProps} />
    </FormValidation>
  );
};
