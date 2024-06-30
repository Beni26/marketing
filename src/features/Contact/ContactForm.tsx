import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import TextArea from "../../ui/TextArea ";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message:string
};
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();


  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
  };



  return (
    <div>
      <p className="text-xl font-bold mb-10">
        سوالی دارید؟<span className="text-primary">برای ما پیام بگذارید</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
        <TextField<ContactFormData>
          name="name"
          type="string"
          register={register}
          required
          placeholder="اسم شما"
          errors={errors}
          validationSchema={{
            required: "لطفا این قسمت را خالی نگذارید",
          }}
        />
        <TextField<ContactFormData>
          name="email"
          type="string"
          register={register}
          required
          placeholder="ایمیل شما "
          errors={errors}
          validationSchema={{
            required: "لطفا این قسمت را خالی نگذارید",
          }}
        />
        <TextField<ContactFormData>
          name="subject"
          type="string"
          register={register}
          required
          placeholder="موضوع"
          errors={errors}
          validationSchema={{
            required: "لطفا این قسمت را خالی نگذارید",
          }}
        />
        <TextArea<ContactFormData>
          name="message"
          register={register}
          required
          placeholder="پیام"
          errors={errors}
          validationSchema={{
            required: "لطفا این قسمت را خالی نگذارید",
          }}
          />
        <button
          type="submit"
          className=" p-4  w-full lg:w-auto pl-16 pr-16 rounded-lg hover:opacity-80 duration-300 transition-all ease-in-out bg-primary  text-white "
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
