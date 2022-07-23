import * as React from 'react';

export default function Skills() {

    let skills = {
        'tongue': [
            'HTML5',
            'CSS3',
            'SCSS',
            'PHP7/8',
            'SQL',
            'Javascript',
        ],

        'gear': [
            'Symfony',
            'React',
            'LAMP',
            'Ajax',
            'API',
            'GIT',
        ],

        'muscle': [
            'Communication ',
            'Analyse ',
            'Optimisation',
            'Persévérance',
            'Force de proposition',
            'humour',
        ],

        'heart': [
            'Programmation',
            'Musique',
            'Sport',
            'Cinéma',
            'Jeux vidéos',
            'Cuisine',
            'Photographie',
            'Dessin'
        ],

        'brain': [
            'Développement',
            'Mise en production',
            'Versioning',
            'Webdesign',
            'Veille techno',
            'Clean code'
        ],
    }


    const handleOpenGearModal = (evt) => {
        getSkillsContent(evt.target.className)
    }

    let skillData = '';
    const [skillsArr, setSkillsArr] = React.useState([]);

    const getSkillsContent = (skillName) => {
    
        if ('tongue' === skillName) {
            skillData = skills.tongue;
        } else if('gear' === skillName) {
            skillData = skills.gear;
        } else if ('muscle' === skillName) {
            skillData = skills.muscle;
        } else if ('heart' === skillName) {
            skillData = skills.heart;
        } else if ('brain' === skillName) {
            skillData = skills.brain;
        }
            setSkillsArr([])
        
            skillData.map((skill => {
                // return skillsArr.push(skill)
                setSkillsArr( arr => [...arr, skill])
            }))
            return skillsArr;
    }

    return (
        <>
            <h1 className='presentation-title'>
                Compétences
            </h1>
            <>
                <div class="specs">
                    <button class="tongue" onClick={handleOpenGearModal}></button>
                    <button class="gear" onClick={handleOpenGearModal}></button>
                    <button class="brain" onClick={handleOpenGearModal}></button>
                    <button class="muscle" onClick={handleOpenGearModal}></button>
                    <button class="heart" onClick={handleOpenGearModal}></button>
                </div>
                <div class="description-specs">
                    <div class="description">
                        <ul>
                        {skillsArr.map((skillName) => (
                            <li>{skillName}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </>
        </>
    );
}
