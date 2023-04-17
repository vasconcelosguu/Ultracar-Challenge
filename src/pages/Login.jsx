import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context";
const data = require('../data/index')

export default function LoginPage() {

  const navigate = useNavigate()

  const { setUserInformations } = useContext(MyContext);

  const [emailValue, changeEmailValue] = useState('')
  const [passwordValue, changePasswordValue] = useState('')
  const [error, setError] = useState('')

  const handleChangeEmail = ({ target: { value } }) => {changeEmailValue( value )};
  const handleChangePassword = ({ target: { value } }) => {changePasswordValue( value )};

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;  
    return emailRegex.test(emailValue);
  }

  const validatePassword = () => {return passwordValue.length >= 6}

  function CheckInputsValues() {
    if(!validateEmail()) {
      setError('Email invalido!')
      return;
    }
    if(!validatePassword()) {
      setError('Senha inválida');
      return;
    }
    const user = data.clients.find(({ email, password }) => email === emailValue &&  password === passwordValue);
    if (user) {
      delete user.password;
      setUserInformations(user);
      navigate('/homepage');
    } else {
      setError('Email ou senha incorretos');
    }
  }

  return(
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Bem Vindo ao UltraCar
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input onChange={handleChangeEmail} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                      <input onChange={handleChangePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="button" onClick={CheckInputsValues} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  {error && (<p className="text-red-600">{error}</p>)}
              </form>
          </div>
      </div>
  </div>
</section>
  )
}