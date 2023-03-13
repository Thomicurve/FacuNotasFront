import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ISelectorReducer } from '../interfaces/Reducers.intefaces'
import { getUserInfo } from '../services/Auth'

function Welcome() {
  const token = useSelector((state: ISelectorReducer) => state.userReducer.token)
  useEffect(() => {
    getUserInfo(token)
  }, [])

  return (
    <>
      <main>
        <div className='mt-44'>
          <h1 className='text-8xl text-center font-bold text-white'>FacuNotas</h1>
          <h3 className='text-center text-gray-100'>Tomar apuntes nunca fue tan fácil</h3>
          <div className='w-full flex justify-center mt-5'>
              <button className='text-white font-bold button-gradient'>
                <Link to='/register'>Comience HOY</Link>
              </button>
          </div>
        </div>
      </main>
      <section className='px-8 py-5 text-white bg-black info-container'>
        <h4 className='text-4xl font-bold'>Qué es FacuNotas?</h4>
        <p className='mt-8 text-lg'>El propósito de “FacuNotas” es el de tener una mejor gestión de las materias, sea en el nivel educativo que se encuentre el usuario. Este va a poder agilizar el tomar nota en clase, y a su vez, también hace mas rápida la búsqueda de las asignaturas en la que se encuentra. Esta aplicación es una versión digitalizada y mejorada de las carpetas convencionales, ya que esta contiene caratulas, listado de cosas para hacer y demás, todo en tu celular.</p>
        <article className='flex justify-center gap-44'>
          <div className='info-container__logos'>
            <img src="" alt="Cloud icon" />
            <h6 className=''>BACKUP EN LA NUBE</h6>
            <p>Tus apuntes están seguros en la nube</p>
          </div>
          <div className='info-container__logos'>
            <img src="" alt="Cloud icon" />
            <h6 className=''>RAPIDEZ</h6>
            <p>Ubica tus apuntes de manera rápida y sin perder tiempo</p>
          </div>
        </article>
      </section>
      <section className='contact-container'>
        <article className='contact-container__info'>
          <h4>Contactanos</h4>
          <p>Si posees alguna duda, sugerencia en cuanto a la aplicación o simplemente te gustaría ponerte en contacto con nosotros  no dudes en hacerlo. <br />
          Síguenos en nuestras redes sociales para no perderte de nuestras ultimas noticias.</p>
          <div className='contact-container__social'>
            <div>Instagram</div>
            <div>Linkedin</div>
          </div>
        </article>
        <article className='contact-container__form'>
        {/* Formulario */}
        </article>
      </section>
    </>
  )
}

export default Welcome
