import * as React from 'react';

export default function Presentation() {
    
    return (
        <div className='presentation'>
            <h1 className='presentation-title'>
                Bonjour, je suis <span>Pierre-Yves Donzé</span>, développeur web, bienvenue sur mon portfolio !
            </h1>

            <br />

            <div class="id-container">
                <div class="infos">
                    <ul class="list">
                        <li>
                            Genre : masculin
                        </li>
                        <li>
                            Âge : 39 (<span>ans</span>, <span>pour l'instant</span>)
                        </li>
                        <li>
                            Cheveux : bof
                        </li>
                        <li>
                            Yeux : ouverts (<span>ou marron</span>)
                        </li>
                        <li>
                            Humeur : variable
                        </li>
                        <li>
                            Humour : variable
                        </li>
                        <li>
                            Signes particuliers : [<span>RQTH</span>]
                        </li>
                        <li>
                            Signe astrologique : 🐟
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
