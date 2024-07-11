import styles from "./ApplicationPage.module.css";
import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { toast } from "react-toast";
import Footer from "../../components/footer/Footer";

export default function ApplicationPage() {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.firstName.trim()) {
      newErrors.firstName = 'The "First name" field should not be empty';
    }
    if (!data.lastName.trim()) {
      newErrors.lastName = 'The "Last name" field should not be empty';
    }
    if (!data.dateOfBirth) {
      newErrors.dateOfBirth = "Enter your date of birth";
    }
    if (!data.phone) {
      newErrors.phone = "Enter the phone number";
    }
    if (!data.email.trim()) {
      newErrors.email = 'The "Email" field should not be empty';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter the correct email address";
      toast.error("Enter the correct email address");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Successfully, сheck your email!");
      console.log(data);
    }
    toast.error("All fields should not be empty!");
    // console.log(errors);
  };

  return (
    <>
      <section className={styles.authSect}>
        <h1 className={styles.head}>Registration of applications!</h1>
        <div className={styles.container}>
          <form className={styles.appForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={data.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleInputChange}
            />
            <InputMask
              mask="99/99/9999"
              placeholder="dd.mm.yyyy"
              name="dateOfBirth"
              value={data.dateOfBirth}
              onChange={handleInputChange}
            />
            <InputMask
              mask="+7(999)999-9999"
              placeholder="+7(000)000-0000"
              name="phone"
              value={data.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <img className={styles.image} src="travel.svg" alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
}
