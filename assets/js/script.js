/* pour les boutons du menu à propos c'est ce que fait que à chaque clic le contenu correspondant du clic */

const tabs = document.querySelectorAll('[data-target]');
const tabcontents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.target);

        tabcontents.forEach((tabcontent) => {
            tabcontent.classList.remove('tab_active');
        });

        target.classList.add('tab_active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        });

        tab.classList.add('tab_active');
    });
});


/* pour le formulaire de contact*/
const contactForm = document.getElementById('contact-form'),
    contactNom = document.getElementById('contact_nom'),
    contactPrenom = document.getElementById('contact_prenom'),
    contactEmail = document.getElementById('contact_email'),
    contactSujet = document.getElementById('contact_sujet'),
    contactMessage = document.getElementById('contact_message');
    erreur_envoie = document.getElementById('erreur_envoie');


const sendEmail = (e) => {
    e.preventDefault();

    // Tester si tous les champs sont remplis
    if (contactNom.value === '' || contactPrenom.value === '' || contactEmail.value === '' || contactSujet.value === '' || contactMessage.value === '') {
        // Affiche ce message
       // erreur_envoie.classList.add('color-first');
        erreur_envoie.textContent = 'Veuillez remplir tous les champs !';
    } else {
        // Les infos depuis la plateforme emailjs avec toujours emailjs.sendForm()
        // serviceID, templateID, #form, publickey
        emailjs.sendForm('service_tl3rw3f', 'template_j7mq9q9', '#contact-form', 'BxedFcEfcZbOskw1P')
            .then(() => {
                // Affichage du message et ajout d'une couleur
                erreur_envoie.classList.add('color-first');
                erreur_envoie.textContent = 'Message envoyé avec succès !';

                // Supprimer le message après quelques secondes
                setTimeout(() => {
                    erreur_envoie.textContent = '';
                }, 5000);

                // Nettoyer les champs
                contactNom.value = '';
                contactPrenom.value = '';
                contactEmail.value = '';
                contactSujet.value = '';
                contactMessage.value = '';

            }, (error) => {
                alert('OUPS! Une erreur est survenue....', error);
            });
    }
};

/* ici quand on clique sur envoyer la fonction sendEmail va se déclencher */
contactForm.addEventListener('submit', sendEmail);

// pour rendre le header fixe et changer sa couleur à un certain niveau de scroll
function scrollHeader() {
    const entete = document.getElementById('header');
    // si on scrolle jusqu'a 80 on ajoute la classe scroll-header à l'element header
    if (this.scrollY >= 80) {
        entete.classList.add('scroll-header');
    } else entete.classList.remove('scroll-header');

}
// on ecoute l'évenement du scroll sur la fenêtre
window.addEventListener('scroll',scrollHeader);



// pour afficher le bouton scroll
function scrollHaut() {
    const scrollhaut = document.getElementById('scroll-haut');
    // si on scrolle jusqu'a 350 on ajoute la classe affichage-scroll à l'element scrollhaut
    if (this.scrollY >= 350) {
        scrollhaut.classList.add('affichage-scroll');
    } else scrollhaut.classList.remove('affichage-scroll');

}
// on ecoute l'évenement du scroll sur la fenêtre
window.addEventListener('scroll',scrollHaut);

/* Pour afficher le menu */
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

/* ici on vérifie l'existence du nav toggle si ça existe on affiche le menu */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('affichage_menu');
    })
}    

/* ici on vérifie l'existence du nav close  et on cache le menu quand on clique dessus */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('affichage_menu');
    })
}    


/* Suppression du menu sur les petits ecrans quand on clique sur un lien*/

const navlink = document.querySelectorAll('.nav_link');

function linkAction () {
    const navMenu = document.getElementById('nav_menu');
    // ici quand on clique sur chaque lien on supprime la classe affichage_menu
    navMenu.classList.remove('affichage_menu');
}

navlink.forEach((n)=> n.addEventListener('click',linkAction));


/* pour gerer les boutons details de mes projets */


  // On sélectionne tous les boutons
  const voirPlusBtns = document.querySelectorAll(".voir-plus");

  // On boucle pour ajouter un événement à chacun
  voirPlusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Pas de détails disponibles pour le moment revenez plustard merci ♥ ");
    });
  });

