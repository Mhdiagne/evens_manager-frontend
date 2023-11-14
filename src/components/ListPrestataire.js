import React from 'react';
import RowPrestataire from './RowPrestataire';
import sem from '../assets/img/seminaire.jpg'
import x from '../assets/img/bapteme.jpg'
import test from '../assets/img/mariage.jpg'
import d from '../assets/img/magal.jpeg'

const ListPrestataire = () => {
    return (
        <div>
            <h1 style={{margin: "40px 0px 40px", textAlign:"center",}}>Tous les Prestataires</h1>
            <RowPrestataire 
                imagep={sem} 
                altp="Seminaire"
                nom="Tandem Prestige"
                fonction="Traiteur"
                call="77 194 32 18"
                mail="mhndiaye88@gmail.com"
                tarif="200 000fr"
                adresse="Dakar"
                desc="Tandem Prestige vous accompagne avec des plats prestigieux à l’image de votre       anniversaire, mariage, dîner... "
            />
            <RowPrestataire 
                imagep={x} 
                altp="Seminaire"
                nom="Hallo Decoration"
                fonction="Decoration"
                call="77 769 32 87"
                mail="mikeye03@gmail.com"
                tarif="260 000fr"
                adresse="Saint-Louis"
                desc="Hallo Decoration est une boite prestigieux ui vous accompagne dans vos anniversaires, mariages, dîners... "
            />
            <RowPrestataire 
                imagep={test} 
                altp="Seminaire"
                nom="6Point9"
                fonction="Habillement"
                call="78 555 92 18"
                mail="daffyduck@gmail.com"
                tarif="150 400fr"
                adresse="Diourbel"
                desc="6Point9 est le numero de l'habillement et la couture anniversaire, mariage, dîner... "
            />
            <RowPrestataire 
                imagep={d} 
                altp="Seminaire"
                nom="NessNessi vision"
                fonction="Photographe"
                call="78 567 89 32"
                mail="soulmate54@gmail.com"
                tarif="400 000fr"
                adresse="Ziguinchor"
                desc="NessNessi vision vous propose des photos nette et des montages videos à la hauteur de vos attentes... "
            />
            <RowPrestataire 
                imagep={sem} 
                altp="Seminaire"
                nom="Tandem Prestige"
                fonction="Traiteur"
                call="77 194 32 18"
                mail="mhndiaye88@gmail.com"
                tarif="200 000fr"
                adresse="Dakar"
                desc="Tandem Prestige vous accompagne avec des plats prestigieux à l’image de votre       anniversaire, mariage, dîner... "
            />
            <RowPrestataire 
                imagep={x} 
                altp="Seminaire"
                nom="Hallo Decoration"
                fonction="Decoration"
                call="77 769 32 87"
                mail="mikeye03@gmail.com"
                tarif="260 000fr"
                adresse="Saint-Louis"
                desc="Hallo Decoration est une boite prestigieux ui vous accompagne dans vos anniversaires, mariages, dîners... "
            />
            <RowPrestataire 
                imagep={test} 
                altp="Seminaire"
                nom="6Point9"
                fonction="Habillement"
                call="78 555 92 18"
                mail="daffyduck@gmail.com"
                tarif="150 400fr"
                adresse="Diourbel"
                desc="6Point9 est le numero de l'habillement et la couture anniversaire, mariage, dîner... "
            />
            <RowPrestataire 
                imagep={d} 
                altp="Seminaire"
                nom="NessNessi vision"
                fonction="Photographe"
                call="78 567 89 32"
                mail="soulmate54@gmail.com"
                tarif="400 000fr"
                adresse="Ziguinchor"
                desc="NessNessi vision vous propose des photos nette et des montages videos à la hauteur de vos attentes... "
            />
        </div>
    );
};

export default ListPrestataire;