import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/schemalogin";

const Login = () => {
  const { logIn } = UserAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    actions.resetForm();
    try {
      await logIn(values.email, values.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/dde259d4-090d-4cdb-ab53-213cac92d99b/AR-es-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto  bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? (
                <p className="p-2 bg-red-500 my-2 text-center">
                  The username or password is incorrect
                </p>
              ) : null}
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "p-3 my-2 bg-gray-700 rounded border border-red-600"
                      : "p-3 my-2 bg-gray-700 rounded"
                  }
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <input
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "p-3 my-2 bg-gray-700 rounded border border-red-600"
                      : "p-3 my-2 bg-gray-700 rounded"
                  }
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="disabled:opacity-25 bg-red-600 py-3 my-6 rounded font-bold"
                >
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
              {/* 
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
