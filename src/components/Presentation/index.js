import * as React from 'react';

export default function Presentation() {

    return (
        <div className='presentation'>
            <h1 className='presentation-title'>
                <span>Pierre-Yves Donzé</span>
                <br />
                développeur web
            </h1>

            <br />

            <div class="id-container">
                {/* Résumé */}
                <div class="infos">
                    <ul class="list">
                        <li>
                            Genre : <span>masculin</span>
                        </li>
                        <li>
                            Âge : <span>40 ans</span>
                        </li>
                        <li>
                            Localisation : <span>Nancy (54) ou Full Remote</span>
                        </li>
                        <li>
                            Spécialisation : <span>Symfony</span>
                        </li>
                        <li>
                            Expérience : <span>Autodidacte + en entreprise</span>
                        </li>
                        <li>
                            Signes particuliers : <span>RQTH</span>
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
