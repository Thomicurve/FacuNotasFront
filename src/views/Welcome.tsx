import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ISelectorReducer } from '../interfaces/Reducers.intefaces'


function Welcome() {
  const navigate = useNavigate();

  const token = useSelector((state: ISelectorReducer) => state.userReducer.token)
  useEffect(() => {
    if(token) return navigate("/inicio")     
  }, [])

  return (
    <>
      <main className='my-80'>
        <div className=''>
          <h1 className='text-8xl text-center font-bold text-white'>FacuNotas</h1>
          <h3 className='text-center text-gray-100'>Tomar apuntes nunca fue tan fácil</h3>
          <div className='w-full flex justify-center mt-5'>
              <button className='text-white font-bold button-gradient'>
                <Link to='/register'>Comience HOY</Link>
              </button>
          </div>
        </div>
      </main>
      <section className='mt-96 px-8 pt-12 pb-40 text-white bg-black info-container'>
        <h4 className='text-5xl font-bold'>Qué es FacuNotas?</h4>
        <p className='mt-8 text-lg'>El propósito de “FacuNotas” es el de tener una mejor gestión de las materias, sea en el nivel educativo que se encuentre el usuario. Este va a poder agilizar el tomar nota en clase, y a su vez, también hace mas rápida la búsqueda de las asignaturas en la que se encuentra. Esta aplicación es una versión digitalizada y mejorada de las carpetas convencionales, ya que esta contiene caratulas, listado de cosas para hacer y demás, todo en tu celular.</p>
        <article className='flex justify-center gap-44 mt-20'>
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
      <section className='contact-container mx-36 flex justify-between mt-10'>
        <article className='contact-container__info'>
          <h4 className='text-white font-bold text-4xl'>Contactanos</h4>
          <p className='text-white'>Si posees alguna duda, sugerencia en cuanto a la aplicación o simplemente te gustaría ponerte en contacto con nosotros  no dudes en hacerlo. <br />
          Síguenos en nuestras redes sociales para no perderte de nuestras ultimas noticias.</p>
          <div className='contact-container__social flex text-white gap-10'>
            <div>Instagram</div>
            <div>Linkedin</div>
          </div>
        </article>
        <article className='contact-container__form'>
          <h6 className='text-2xl font-bold text-center text-white'>Formulario de Contacto</h6>
          <form>
            <input/>
            <input/>
            <input/>
            <button>Enviar</button>
          </form>
        {/* Formulario */}
        </article>
      </section>
    </>
  )
}

export default Welcome
