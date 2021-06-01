import React from 'react'
import {auth, db} from '../firebase'
import {withRouter} from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const [esRegistro, setEsRegistro] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if(!pass.trim()){
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if(pass.length < 6){
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)

        if(esRegistro){
            registrar()
        }else{
            login()
        }

    }

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/')
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/user-not-found'){
                setError('Email no registrado')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Contraseña incorrecta')
            }
        }
    }, [email, pass, props.history])

    const registrar = React.useCallback(async() => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })
            await db.collection(res.user.uid).add({
                name: 'EJEMPLO->A QUI SE AGREGAN LOS DATOS PARA EL USUARIO ACTUAL ',
                fecha: Date.now()
            })
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/')
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('Email ya utilizado')
            }
        }

    }, [email, pass, props.history])

    return (
        <div className="container contact">
        <div className="row">
            <div className="col-md-8 col-12 mx-auto">
                <div className="card shadow-lg border-0 p-4">
                    <div className="mt-5">
                        <h3 className="text-center">
                            {
                                esRegistro ? 'Registro' : 'Loguear'
                            }
                        </h3>
                        <hr/>
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                                <form onSubmit={procesarDatos}className="     ">
                                    {
                                        error ? (
                                            <div className="alert alert-danger">
                                                {error}
                                            </div>
                                        ) : null
                                    }
                                    <input 
                                        type="email" 
                                        className="form-control mb-2"
                                        placeholder="Ingrese Email"
                                        onChange={ e => setEmail(e.target.value) }
                                        value={email}
                                    />
                                    <input 
                                        type="password" 
                                        className="form-control mb-2"
                                        placeholder="Ingrese Contraseña"
                                        onChange={ e => setPass(e.target.value) }
                                        value={pass}
                                    />
                                    <div className="mt-1">
                                    <button 
                                       class="btn btn-outline-primary"
                                        type="submit"
                                    >
                                        {esRegistro ? 'Registrar' : 'Acceder'}
                                    </button> 
                                    </div>
                                    <div className="mt-1"><button type="button"
                                        class="btn btn-outline-secondary col-xl-15"
                                        type="button"
                                        onClick={() => setEsRegistro(!esRegistro)}
                                    >
                                        {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                                    </button></div>
                                  
                                    {
                                        !esRegistro ? (
                                            <button 
                                            type="button" class="btn btn-outline align-self-end btn-sm mt-2"
                                                type="button"
                                                onClick={() => props.history.push('/Reset')}
                                            >
                                               <strong> Recuperar contraseña</strong>
                                            </button> 
                                        ) : null
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        </div>
    )
}

export default withRouter(Login)