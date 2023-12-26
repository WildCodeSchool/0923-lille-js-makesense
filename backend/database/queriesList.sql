/* List of SQL queries we're going to need for this project */

/*  page: login
    query for: authentification. Appeler la bdd pour vérifier que le login et le mdp correspondent à un user.
*/

/*  page: nav
    query for: appeler les infos (select) de l'utilisateur (user) dans le dropdown (lastname, firstname, email, location, picture, role)
    query for: changer (update) la photo (picture) de l'utilisateur (user). il faudra stocker les photos dans le backend pour insérer 
        seulement leur adresse dans la BDD.
*/

/*  page: homepage
    query for: filtrer les décisions (decision (title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture) en attente, 
        decisions dont le status = en cours. 
    query for: filtrer les décisions qui n'ont pas encore de réponses, cad les decision (decision) dont l'id (decision_id) n'est pas présent
        dans la table de commentaires (comment). Toujours besoin de title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture.
    query for: filtrer toutes les décisions (decision) publiées sur la plateforme (title, status, firstname, lastname, picture,
        lieu: decision_maker_id>decision_maker>user_id>user>location, commentaires: trouver le nombre d'occurences du decision_id dans comment)
    query for: filtrer les décisions qui concernent l'utilisateur en tant qu'auteur (user_id in decision_maker), expert (assignment), impacté (assignment) 
        ou commentateur (employee_id/admin_id = user_id à associer avec decision_id). Toujours beoin de title, status, lieu, nb de commentaires + 
        auteur:  firstname, lastname, picture
*/

/*  page: decision
    query for:
*/

/*  page: create decision
    query for:
*/

/*  page: create user
    query for:
*/
