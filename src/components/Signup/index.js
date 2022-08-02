import React from 'react'

const SignUp = () => {
    return (
    <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
    
                    <h2>Inscription</h2>
                        <form >
                            <div className="inputBox">
                                <input  type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input  type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input   type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input  type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>

                        
                        </form>
                        <div className="linkContainer">
                            <button className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp